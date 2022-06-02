def agentLabel
if (env.BRANCH_NAME == "main") {
    environment = "production"
    agentLabel = "master"
    TAG = "prod"
} else if(env.BRANCH_NAME == "dev"){
    environment = "development"
    agentLabel = "ec2"
    TAG = "dev"
} else{
    environment = "development"
    agentLabel = "ec2"
    TAG = "dev"
}

pipeline{

  agent any

  environment {
    IMAGE_NAME="safderun/coineus-frontend"
    registryCredential = 'safderun-dockerhub'
    dockerImage = ''
  }

  stages{
    stage('docker image build'){
      agent {label 'master'}
      steps{
        echo "Building docker image."
        sh "cp -r ./config/$environment-env ./.env"
        script{
          dockerImage = docker.build IMAGE_NAME
        }
      }
    }

    stage('docker image push'){
      agent {label 'master'}
      steps{
        script{
          echo "This is ${env.BRANCH_NAME} environment\nPushing docker image to dockerhub."
          docker.withRegistry('', registryCredential) {
            dockerImage.push("${TAG}-${BUILD_NUMBER}")
            env.BRANCH_NAME=='main' ? dockerImage.push("latest"): ''
            env.BRANCH_NAME=='dev' ? dockerImage.push("dev-latest"): ''
          }
          echo "Removing docker image"
          sh "docker rmi $IMAGE_NAME:$TAG-$BUILD_NUMBER"
          env.BRANCH_NAME=='main' ? "sh docker rmi $IMAGE_NAME:latest" : ''
        }
      }
    }
    stage('deploy'){
      agent {label agentLabel}
      environment {
        TAG = "$TAG-$BUILD_NUMBER"
      }
      steps{
        script{
          if(env.BRANCH_NAME=='main'){
            echo 'This is main branch, deploying to production'
            sh "sudo systemctl restart coineus-frontend.service"   
          } else if (env.BRANCH_NAME=='dev'){
            echo 'This is dev branch, deploying to dev'
            sh "sudo systemctl restart coineus-frontend.service"            
          } else {
            echo 'This is not main or dev branch, deploying to ec2'
            sh "sudo systemctl restart coineus-frontend.service"
          }
        }
      }
    }
  }

  post {
        success {
          mail (bcc: '', body: "Latest deploy for Coineus Frontend was successfull!.\nEnvironment: $environment\nTag: $TAG\nBuild Number: $BUILD_NUMBER", cc: '', from: 'Jenkins', replyTo: '', subject: "Coineus Frontend Deploy $environment Succesfull!", to: "safderun@proton.me")
        }
        failure {
          mail bcc: '', body: "Latest deploy for Coineus Frontend was failed!.\nEnvironment: $environment\nTag: $TAG\nBuild Number: $BUILD_NUMBER", cc: '', from: 'Jenkins', replyTo: '', subject: "!!!Coineus Frontend Deploy $environment Failed!!!", to: "safderun@proton.me"
        }
    }

}
