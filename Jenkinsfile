pipeline {
    agent any

    tools {
        nodejs 'nodeJS'
    }

    options { buildDiscarder(logRotator(numToKeepStr: '5')) }

    
    stages {
        stage('Clean') {
            steps {
                cleanWs()
            }
        }

        stage('pull sources') {
            steps {
                git branch: '${BRANCH_NAME}',
                credentialsId: 'github_credentials',
                url: 'https://github.com/CineCare/cineHub-frontend'
                script {
                    env.GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
                }
            }
        }

        stage('install') {
            steps {
                echo 'performing install...'
                sh '''
                    npm install
                '''
            }
        }

        stage('test FTP') {
            steps {
                sh '''
                    ftp -i -n node13-ca.n0c.com <<END_SCRIPT
                    quote USER whitedog@cinecare.ca
                    quote PASS Ys.]]WCCzdnF64&
                    cd dev
                    ls
                    END_SCRIPT
                '''
            }
            
        }

        
    }

    post {
        regression {
            sh "echo ${GIT_COMMIT_MSG}"
            discordSend description: "Jenkins Pipeline Build Frontend ${BRANCH_NAME} failed ! ☹️\n\ngit commit message :\n${GIT_COMMIT_MSG}",
            footer: "Better luck next try ?",
            link: "$BUILD_URL",
            result: currentBuild.currentResult,
            title: JOB_NAME,
            webhookURL: "https://discord.com/api/webhooks/1208855718338363572/hPxGKwxnigUMvt0ZaPSsAiU1p8Udkdpg4Yo79UCIfo_lxm7Phbe-JLYdTV-22GFCXvYU"
        }
        fixed {
            discordSend description: "Jenkins Pipeline Build Frontend ${BRANCH_NAME} succeed ! 😎\n\ngit commit message :\n${GIT_COMMIT_MSG}",
            footer: "Good job !",
            link: "$BUILD_URL",
            result: currentBuild.currentResult,
            title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1208855718338363572/hPxGKwxnigUMvt0ZaPSsAiU1p8Udkdpg4Yo79UCIfo_lxm7Phbe-JLYdTV-22GFCXvYU"
        }
    }
}
