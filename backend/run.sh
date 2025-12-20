#!/bin/bash

# Backend startup script
echo "🚀 Starting FastAPI Backend Server..."
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies if needed
if [ ! -f "venv/.installed" ]; then
    echo "📥 Installing dependencies..."
    pip install -r requirements.txt
    touch venv/.installed
fi

# Start the server
echo "✅ Starting server on http://localhost:8000"
echo "📚 API Docs available at http://localhost:8000/docs"
echo ""
uvicorn main:app --reload --port 8000

