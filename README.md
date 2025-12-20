# Freelancer Portfolio Website

A beautiful, modern portfolio website built with ReactJS showcasing freelance development services and technical skills.

## Features

- **Modern Design**: Sleek, dark-themed UI with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Service Showcase**: Highlights services including:
  - Website Development
  - Python Automation & Google Sheets
  - Application Debugging
  - Mobile Development
  - AI Integration & Chatbots
  - Cloud & Backend Solutions
- **Skills Display**: Comprehensive technical skills section
- **Contact Form**: Interactive contact form integrated with backend API
- **Backend API**: FastAPI backend with MongoDB for storing customer information
- **Smooth Scrolling**: Smooth navigation between sections

## Tech Stack

### Frontend
- React 18.2.0
- React Scripts 5.0.1
- Modern CSS with animations
- Responsive design principles

### Backend
- Python FastAPI
- MongoDB (MongoDB Atlas)
- Motor (async MongoDB driver)
- Pydantic for data validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python 3.8 or higher
- MongoDB Atlas account (connection string configured)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontEnd
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate virtual environment (recommended):
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Start the FastAPI server:
```bash
uvicorn main:app --reload --port 8000
```

Or use the provided script:
```bash
chmod +x run.sh
./run.sh
```

5. Backend API will be available at:
   - API: http://localhost:8000
   - API Docs: http://localhost:8000/docs
   - Alternative Docs: http://localhost:8000/redoc

### Running Both Frontend and Backend

You need to run both servers simultaneously:

**Terminal 1 - Frontend:**
```bash
cd frontEnd
npm start
```

**Terminal 2 - Backend:**
```bash
cd backend
uvicorn main:app --reload --port 8000
```

### Build for Production

```bash
cd frontEnd
npm run build
```

This creates an optimized production build in the `frontEnd/build` folder.

## Project Structure

```
myprofile/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   ├── run.sh              # Backend startup script
│   └── README.md           # Backend documentation
├── frontEnd/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Services.js
│   │   │   ├── Skills.js
│   │   │   ├── Contact.js      # Integrated with backend API
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
└── README.md
```

## Customization

### Update Contact Information

Edit the contact section in `frontEnd/src/components/Contact.js` to update:
- Email address
- Availability status
- Response time

### Modify Services

Update the services array in `frontEnd/src/components/Services.js` to customize your offerings.

### Adjust Skills

Modify the skill categories in `frontEnd/src/components/Skills.js` to reflect your expertise.

### Change Colors

The color scheme uses CSS variables and gradients. Main colors:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Background: `#0a0a0a` (Dark)

## License

This project is open source and available for personal use.

