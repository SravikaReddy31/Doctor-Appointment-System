# Doctor Appointment System

The Doctor Appointment System is a full-stack web application that allows users to book appointments with doctors in an easy and efficient way. The system helps manage doctors, patients, appointments, and notifications digitally, reducing manual effort and saving time.

---

##  Features

-  User registration and login
-  Doctor management
-  Book, view, and manage appointments
-  Appointment notifications
-  Secure backend APIs
-  Simple and user-friendly frontend

---

##  Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

##  Project Structure
- doctor-appointment-system/
- │
- ├── backend/
- │ ├── routes/
- │ │ ├── users.js
- │ ├── doctors.js
- │ │ ├── appointments.js
- │ │ └── notifications.js
- │ ├── server.js
- │ ├── package.json
- │ └── package-lock.json
- │
- ├── frontend/
- │ ├── index.html
- │ ├── styles.css
- │ └── script.js
- │
- ├── .gitignore
- └── README.md

---

## How To Run Project

## **Backend**
```bash
cd backend
npm install

Update MongoDB connection string inside server.js or use a .env file.
Start backend server:
node server.js

Server will run on:
http://localhost:5000
```

---

## **Frontend**
- Go to frontend/
- Double-click index.html
- Right-click index.html
- Click “Open with Live Server”

---

## **API Endpoints (Sample)**
- POST /users/register – Register user
- POST /users/login – User login
- GET /doctors – Fetch doctors list
- POST /appointments – Book appointment
- GET /appointments – View appointments

---

##  **Use Case**
- This system can be used in:
- Hospitals
- Clinics
- Health care centers
- Online doctor consultation platforms

---

## **Learning Outcomes**
- Full-stack web development
- RESTful API design
- MongoDB database integration
- Backend–frontend communication
- Git & GitHub best practices

---

## **Future Enhancements** 
- Admin dashboard
- Email/SMS notifications
- Payment integration
- Appointment reminders
- Responsive UI and mobile app

---

## **Conclusion**
- The Doctor Appointment System provides a reliable and efficient solution for managing doctor appointments digitally. It simplifies appointment booking, improves data management, and demonstrates practical full-stack development skills using Node.js, Express.js, and MongoDB.
