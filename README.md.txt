# DevOps Portfolio

**Project By:** Mariam Tariq & Mishal Mansoor  
**Course:** DevOps  

## Description
This project demonstrates a complete DevOps workflow including CI/CD using Jenkins, backend setup with Node.js, and Docker containerization. It includes automated tests, Docker builds, and pipeline automation for continuous integration.

## Tech Stack
- **Backend:** Node.js 20
- **CI/CD:** Jenkins
- **Containerization:** Docker
- **Testing:** Jest
- **Version Control:** GitHub

## Project Features
- Automated pipeline to checkout code from GitHub
- Install backend dependencies automatically
- Run automated tests on every commit
- Build and run Docker container for backend service
- Demonstrates DevOps best practices and CI/CD workflow

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/MariamTariq/devops-portfolio.git
cd devops-portfolio
2. Install backend dependencies

cd backend
npm install


3. Run backend tests

npm test

###Running with Docker

1. Build backend Docker image

docker build -t devops-backend ./backend


2. Run backend container

docker run -d -p 3000:3000 devops-backend


3. Access backend API

Backend service will run at: http://localhost:3000

###Jenkins CI/CD Pipeline

Pipeline steps:

1. Checkout code from GitHub repository

2. Install backend dependencies using npm install

3. Run backend tests using npm test

4. Build Docker image for backend

5. (Optional) Run Docker container

Jenkins URL: http://localhost:8080

Admin Password: Obtain from Docker logs:

docker logs jenkins-server

###Notes

This project is built to demonstrate DevOps practices for academic purposes.

Ensure Docker and Jenkins are running before executing pipeline.

Tested with Node.js 20 and Docker Desktop.