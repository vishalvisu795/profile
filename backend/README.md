# Backend API - FastAPI with MongoDB

Backend service for storing customer contact information from the portfolio website.

## Features

- FastAPI REST API
- MongoDB integration for data storage
- CORS enabled for frontend communication
- Customer data storage (name, email, message)
- Health check endpoints

## Setup

### Prerequisites

- Python 3.8 or higher
- MongoDB Atlas account (connection string already configured)

### Installation

1. Create a virtual environment (recommended):
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

### Running the Server

Start the development server:
```bash
uvicorn main:app --reload --port 8000
```

The API will be available at:
- API: http://localhost:8000
- API Docs: http://localhost:8000/docs
- Alternative Docs: http://localhost:8000/redoc

## API Endpoints

### Health Check
- `GET /` - Basic health check
- `GET /health` - Health check with database status

### Customer Management
- `POST /api/customers` - Store customer information
  - Request body: `{ "name": string, "email": string, "message": string }`
  - Response: Customer data with ID and timestamp

- `GET /api/customers` - Retrieve customer information (optional)
  - Query params: `limit` (default: 10), `skip` (default: 0)

## MongoDB Configuration

- Database: `portfolio_db`
- Collection: `customer_details`
- Connection: MongoDB Atlas (configured in main.py)

## Environment Variables

You can optionally use environment variables for the MongoDB URL:
```bash
export MONGODB_URL="your_connection_string"
```

Then update `main.py` to use:
```python
MONGODB_URL = os.getenv("MONGODB_URL", "default_url")
```

