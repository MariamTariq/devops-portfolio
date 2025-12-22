pipeline {
    agent any

    environment {
        BACKEND_DIR = 'backend'
        DOCKER_IMAGE = 'devops-backend'
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Pulling latest code from GitHub..."
                git branch: 'main', url: 'https://github.com/MariamTariq/devops-portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing Node.js dependencies..."
                dir("${BACKEND_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running backend tests..."
                dir("${BACKEND_DIR}") {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${DOCKER_IMAGE} ./backend"
            }
        }

        stage('Optional: Run Docker Container') {
            steps {
                echo "Running Docker container for backend..."
                sh "docker run -d -p 3000:3000 --name ${DOCKER_IMAGE}-container ${DOCKER_IMAGE}"
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully ✅"
        }
        failure {
            echo "Pipeline failed ❌"
        }
    }
}
