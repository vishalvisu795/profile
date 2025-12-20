from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
from typing import Optional

app = FastAPI(title="Freelancer Portfolio API", version="1.0.0")

# CORS middleware to allow frontend to communicate with backend
# Get allowed origins from environment variable or use defaults
# Include Vercel frontend URL by default
DEFAULT_ORIGINS = "http://localhost:3000,http://127.0.0.1:3000,https://profile-two-lilac.vercel.app"
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", DEFAULT_ORIGINS).split(",")
# Strip whitespace from origins
ALLOWED_ORIGINS = [origin.strip() for origin in ALLOWED_ORIGINS]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection string - use environment variable for security
MONGODB_URL = os.getenv(
    "MONGODB_URL",
    "mongodb+srv://vishal5676:vishal5676@vishalvisu25.ssyaodm.mongodb.net/"
)
DATABASE_NAME = os.getenv("DATABASE_NAME", "user_db")
COLLECTION_NAME = os.getenv("COLLECTION_NAME", "customer_details")

# MongoDB client
client = None
database = None
collection = None


@app.on_event("startup")
async def startup_db_client():
    """Initialize MongoDB connection on startup"""
    global client, database, collection
    try:
        # Configure MongoDB connection with SSL/TLS settings
        # Add tlsCAFile=None to use system CA certificates
        # Add serverSelectionTimeoutMS for better error handling
        client = AsyncIOMotorClient(
            MONGODB_URL,
            serverSelectionTimeoutMS=5000,
            connectTimeoutMS=10000,
            socketTimeoutMS=20000
        )
        database = client[DATABASE_NAME]
        collection = database[COLLECTION_NAME]
        # Test connection
        await client.admin.command('ping')
        print("✅ Successfully connected to MongoDB")
    except Exception as e:
        print(f"❌ Error connecting to MongoDB: {e}")
        print(f"❌ MongoDB URL: {MONGODB_URL[:50]}...")  # Print partial URL for debugging


@app.on_event("shutdown")
async def shutdown_db_client():
    """Close MongoDB connection on shutdown"""
    global client
    if client is not None:
        client.close()
        print("MongoDB connection closed")


# Pydantic models for request/response
class CustomerMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


class CustomerResponse(BaseModel):
    id: str
    name: str
    email: str
    message: str
    created_at: str
    status: str = "Customer information stored successfully"


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "ok",
        "message": "Freelancer Portfolio API is running",
        "version": "1.0.0"
    }


@app.get("/health")
async def health_check():
    """Health check endpoint with DB connection status"""
    try:
        if client is not None:
            await client.admin.command('ping')
            db_status = "connected"
        else:
            db_status = "disconnected"
    except:
        db_status = "disconnected"
    
    return {
        "status": "ok",
        "database": db_status,
        "timestamp": datetime.utcnow().isoformat()
    }


@app.post("/api/customers", response_model=CustomerResponse)
async def create_customer(customer: CustomerMessage):
    """
    Store customer information in MongoDB
    """
    try:
        if collection is None:
            raise HTTPException(status_code=500, detail="Database connection not available")
        
        # Create document to insert
        customer_doc = {
            "name": customer.name,
            "email": customer.email,
            "message": customer.message,
            "created_at": datetime.utcnow().isoformat()
        }
        
        # Insert into MongoDB
        result = await collection.insert_one(customer_doc)
        
        # Return response
        return CustomerResponse(
            id=str(result.inserted_id),
            name=customer.name,
            email=customer.email,
            message=customer.message,
            created_at=customer_doc["created_at"]
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error storing customer data: {str(e)}")


@app.get("/api/customers")
async def get_customers(limit: int = 10, skip: int = 0):
    """
    Retrieve customer information from MongoDB (optional - for admin purposes)
    """
    try:
        if collection is None:
            raise HTTPException(status_code=500, detail="Database connection not available")
        
        cursor = collection.find().skip(skip).limit(limit).sort("created_at", -1)
        customers = await cursor.to_list(length=limit)
        
        # Convert ObjectId to string
        for customer in customers:
            customer["id"] = str(customer["_id"])
            del customer["_id"]
        
        return {
            "total": len(customers),
            "customers": customers
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving customer data: {str(e)}")

