# Student_Management_System

Student Management System is a full-stack web application that helps schools and colleges efficiently manage students, courses, and academic records.
The system provides a secure backend using **Spring Boot** and **MySQL**, along with a responsive and modern frontend built using **React**, **JavaScript**, and **Bootstrap**.
This project demonstrates full-stack development skills including REST API creation, database integration, authentication, CRUD operations, and responsive UI design.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#Screenshots)

    ## Features

   - **User Authentication**
         Register and log in with JWT-based authentication, providing secure access to the system.

    - **Student Management**
      - Add new students
      - Update student details
      - Delete students
      - View all students
      - Search students by name or ID

    - **Marks Management**
      - Add marks for students
      - Update marks
      - Calculate total and average marks
-
    - **User Profile**
      - View account details
      - Manage personal information
      - Secure user-specific data access

    - **Dashboard Statistics**
      - Total Students
      - Total Courses
      - Total Enrollments
      - Performance Summary

    - **Protected Endpoints**
        All backend APIs are secured using JWT authentication. Each user can only access authorized data.

    - **Responsive UI**
       - Built with React.js + Bootstrap
       - Fully responsive for desktop and mobile devices
       - Clean and user-friendly interface

## Tech Stack

🔹 **Backend**
   - [Java](https://www.oracle.com/java/)
   - [SpringBoot](https://spring.io/projects/spring-boot)
   - [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
   - [Spring Security](https://spring.io/projects/spring-security) 
   - [Hibernate](https://hibernate.org/)
   - [Maven](https://maven.apache.org/)

🔹 **Frontend**
   - [React.js](https://reactjs.org/)
   - [React Rounter](https://reactrouter.com/)
   - [Boostrap](https://getbootstrap.com/)
   - [Axios](https://axios-http.com/)

 🔹 **Database**
   - [MySQL](https://www.mysql.com/) 

 ## Project Structure

 ```plaintext
 Student-Management-System
│
├── backend (Spring Boot)
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── config
│
├── frontend (React)
│   ├── components
│   ├── pages
│   ├── context
│   └── services
│
└── README.md
```

## Installation

  ## 1.Clone the Repository
  ```bash
    git clone https://github.com/your-username/Student-Management-System.git cd Student-Management-System
  ```

🔹 **Backend Setup (Spring Boot)**
  ## 2.Open in Eclipse
    
     - File → Import → Existing Maven Project
     - Select backend folder
  ## 3.Configure Database
  ```properties
   spring.application.name=projectStudentManegment

  server.port=8084
  spring.datasource.url=jdbc:mysql://localhost:3307/sb_student
  spring.datasource.username=root
  spring.datasource.password=root@123

  spring.jpa.open-in-view=false
  spring.jpa.hibernate.ddl-auto=update

```

## 4. Run Backend
Run:
```code
    StudentManagementApplication.java
```
Backend runs on:

```Code
    http://localhost:8085
```

🔹 **Frontend Setup (React)**

## 5. Install Dependencies
```Bash
    cd frontend
    npm install
```

## 6. Start Frontend
```Bash
    npm start
```
Frontend runs on:
```Code
   http://localhost:3000
```

## Usage

### 1. Start the Backend
From the `backend` directory:
```bash
mvn spring-boot:run
```
- By default, runs on http://localhost:8085`

### Using Eclipse IDE

 1.Open the project in Eclipse

 2.Right-click on
```
PersonalFinanceManagerApplication.java
```
 3. Click:
   **Run As → Spring Boot App**

 Backend will start on:
 ```Code
     http://localhost:8085
 ```

### 2. Start the Frontend

Open a new terminal in the `frontend` directory:
```bash
npm start
```
- By default, runs on `http://localhost:3000`

  ### 3. Access the Application
  Open your browser at `http://localhost:3000`. You can sign up for a new account or log in if  you already have one.
  
## Screenshots

**Home page**:

<img width="1904" height="1024" alt="Screenshot 2026-03-01 152758" src="https://github.com/user-attachments/assets/1d6c4901-4931-4c86-872e-d90f15c238a9" />
        
---

**Contact page**:

<img width="1915" height="977" alt="Screenshot 2026-03-01 152852" src="https://github.com/user-attachments/assets/cbfc520b-bad0-4259-975e-b6abe403a970" />

---
**Login page**:

<img width="1917" height="607" alt="image" src="https://github.com/user-attachments/assets/bd95bc9f-7f9a-4200-b698-eeda6f722826" />

---
**Dashborad page**:

<img width="1919" height="695" alt="Screenshot 2026-03-01 153054" src="https://github.com/user-attachments/assets/1bc8cafb-c1be-482b-adf9-f6cbfb34e42c" />

---

