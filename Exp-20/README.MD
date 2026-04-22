Experiment 20: Implement CI/CD Pipeline for Application Deployment

Project Overview
This project demonstrates the integration of a Continuous Deployment (CD) pipeline for a backend application. It focuses on containerizing the application using Docker and automating the build and deployment process using GitHub Actions.

Objectives
Integrate a CD pipeline into the existing testing framework (Experiment-16).

Create a Docker image for the backend application.

Run the application within a Docker container.

Automate the workflow using GitHub Actions.

Technical Stack
Backend: Python (Flask/Pytest)

Containerization: Docker

CI/CD Tool: GitHub Actions

Environment: Windows PowerShell / Linux (GitHub Runner)

How to Run Locally
1. Docker Build
To build the Docker image, run the following command in the terminal:

PowerShell
docker build -t backend-test-img:latest .
2. Docker Run
To start the container and map it to port 5000:

PowerShell
docker run -d -p 5000:5000 --name backend-container backend-test-img:latest
CI/CD Pipeline Details
The GitHub Actions workflow is defined in .github/workflows/cd-pipeline.yml.

Trigger: The pipeline triggers automatically on every push to the main branch.

Build Job: It spins up an ubuntu-latest runner, checkouts the code, and executes the Docker build command to verify that the application remains deployable.