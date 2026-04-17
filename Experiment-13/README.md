# Experiment 13: Backend Integration with MySQL & CRUD Operations

## Project Description
This project demonstrates a RESTful API built using Python (Flask) connected to a MySQL database. It performs full CRUD (Create, Read, Update, Delete) operations on a 'Student' table and includes data validation using Marshmallow.

## Tech Stack
- **Backend:** Python, Flask
- **Database:** MySQL
- **ORM:** SQLAlchemy
- **Validation:** Marshmallow
- **Testing:** Postman

## Setup Instructions

### 1. Database Setup
Log into your MySQL Command Line or Workbench and run:
```sql
CREATE DATABASE student_db;
USE student_db;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    course VARCHAR(100)
);