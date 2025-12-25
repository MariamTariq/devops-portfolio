pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root'
                }
            }
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend Tests') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root'
                }
            }
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

    }

    post {
        failure {
            echo 'Pipeline failed ❌'
        }
        success {
            echo 'Pipeline succeeded ✅'
        }
    }
}
