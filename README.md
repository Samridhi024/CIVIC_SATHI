**CivicSathi** 🏙️

Crowdsourced Civic Issue Reporting & Resolution Platform for Smart Cities

**📌 Summary**

CivicSathi is a full-stack civic engagement platform that connects citizens and municipal authorities through a transparent, data-driven workflow for reporting and resolving urban infrastructure issues. The system enables residents to report civic problems in real time, while providing government officials with a centralized dashboard to manage, prioritize, and analyze complaints efficiently.

By combining real-time data ingestion, geospatial visualization, and AI-assisted categorization, CivicSathi transforms fragmented grievance systems into a scalable, smart-city–ready digital solution 

**🧩 System Overview**

CivicSathi is designed as a multi-tier architecture with two primary user-facing applications:

Citizen Web App (User Side) – for reporting and tracking civic issues

Municipal Admin Dashboard – for managing, resolving, and analyzing reported issues

Both interfaces are powered by a shared backend and real-time database, ensuring seamless data flow and transparency across the system.

**👥 CivicSathi – Citizen Reporting Web App 🌍**

A lightweight, intuitive web application that allows citizens to report everyday civic issues such as potholes, garbage overflow, broken streetlights, and water leaks.

**📂 Project Structure**
CIVIC_SATHI/
├── User_Side_Interface/          # User/citizen web app
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   ├── styles/
│   └── types/
│
├── admin-frontend/               # Municipal admin dashboard
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   ├── seed.js
│
├── public/                       
├── src/                          
├── .gitignore
├── README.md                     
├── package-lock.json
└── package.json

CivicSathi-AI
│   ├── Dockerfile
│   ├── engine.py
│   ├── main.py
│   ├──requirements.txt
│   ├── tag_departments.csv
│   └── tag_keywords.csv


**✨ Key Features (User Side)**

**->Quick Issue Reporting**
Submit complaints using text descriptions and images directly from the browser.

**->Automatic Location Capture**
Uses the Geolocation API to accurately tag issues with real-world coordinates.

**->AI-Assisted Issue Tagging** (CivicSathi-AI)
User descriptions are processed to generate intelligent tags for better classification and prioritization.

**->Status Visibility & Transparency**
Users can track the progress of their submitted issues.

**->Accessible & Inclusive Design**
Clean UI designed for non-technical users, with future support for voice-based and language-independent reporting.

**🏛️ CivicSathi – Municipal Admin Dashboard**

A centralized administrative frontend that serves as the command center for municipal authorities to manage crowdsourced civic issue data.

**✨ Key Features (Admin Side)**

**->Real-Time Dashboard**
Live overview of open issues, resolution rates, and critical alerts.

**->Comprehensive Issue Management**
Advanced table view with search, filtering, and sorting across all reports.

**->Interactive Issues Map**
Leaflet-powered map to visualize issue density and identify civic hotspots.

**->Analytics & Insights**
Charts and visualizations to analyze trends, departmental performance, and resolution efficiency.

**->Seamless Workflow Management**
Update issue status, assign priorities, and generate structured communication for departments.

**->Secure & Responsive UI**
Built with Bootstrap to ensure usability across devices.

**🔁 End-to-End Workflow**

Citizen submits an issue (text + image + auto-location)

                    ⬇️
                    
Backend validates and processes the report

                    ⬇️
                    
AI generates intelligent tags and categorization

                    ⬇️
                    
Issue appears on the Admin Dashboard

                    ⬇️
                    
Authorities assign, prioritize, and resolve the issue

                    ⬇️
                    
Status updates are reflected back to the citizen


**🛠️ Tech Stack**
Frontend

Frameworks: React, Next.js

UI & Styling: Bootstrap, React Bootstrap

Routing: React Router

Mapping: Leaflet.js & React-Leaflet

Charts: Chart.js & React-Chartjs-2

Backend & AI

Backend Framework: Flask, Flask-CORS

Language: Python

AI Integration: Gemini API

Database: Google Firestore (real-time data)

Platform & Tools

Deployment: Vercel

Version Control: GitHub

**🚀 Getting Started (Local Setup)**
Prerequisites

Node.js (v14 or later recommended)

npm

Python 3.8+

1️⃣ Clone the Repository
git clone https://github.com/READSAM/CIVIC_SATHI.git
cd CIVIC_SATHI

2️⃣ Backend Setup
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py


Backend runs on:

http://127.0.0.1:5000

3️⃣ Admin Dashboard Setup
cd admin-frontend
npm install
npm start


Runs at:

http://localhost:3000

4️⃣ User Web App Setup
cd user-frontend
npm install
npm run dev

🔐 Firebase Configuration (Frontend)

Create a .env file inside frontend directories:

REACT_APP_FIREBASE_API_KEY="YOUR_API_KEY"
REACT_APP_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
REACT_APP_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
REACT_APP_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
REACT_APP_FIREBASE_APP_ID="YOUR_APP_ID"


.env is ignored by Git to keep credentials secure.


**🌱 Impact & Sustainability**

Increases civic engagement through accessible digital reporting

Improves government accountability via transparent status tracking

Enables data-driven urban planning and hotspot detection

Reduces operational costs using automation and AI

Built with scalable, cloud-native, open-source technologies
