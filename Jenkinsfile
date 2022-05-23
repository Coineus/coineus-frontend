pipeline{

  agent any

  environment {
    IMAGE_NAME="safderun/coineus-frontend"
    registryCredential = 'safderun-dockerhub'
    dockerImage = ''
  }

  stages{

    stage('docker image build'){
      steps{
        echo "Building docker image"
        script{
          dockerImage = docker.build IMAGE_NAME
        }
      }
    }

    stage('docker image push'){
      steps{
        echo "Pushing docker image"
        script{
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
            dockerImage.push('latest')
          }
        }
        echo "Removing docker image"
        sh "docker rmi $IMAGE_NAME:$BUILD_NUMBER"
        sh "docker rmi $IMAGE_NAME:latest"
      }
    }

    stage('deploy'){
      environment {
        SERVER_BUILD_NUMBER = "$BUILD_NUMBER"
      }
      steps{
        sh "sudo sh ./Docker/update-frontend.sh"
      }
    }
  }

  post {
        success {
          mail (bcc: '', body: "Latest deploy for Coineus Frontend was successfull!.\nBuild Number: $BUILD_NUMBER", cc: '', from: 'Jenkins', replyTo: '', subject: 'Coineus Frontend Deploy Succesfull!', to: 'safderun@proton.me')
        }
        failure {
          mail bcc: '', body: "Latest deploy for Coineus Frontend was failed!.\nBuild Number: $BUILD_NUMBER", cc: '', from: 'Jenkins', replyTo: '', subject: '!!!Coineus Frontend Deploy Failed!!!', to: 'safderun@proton.me'
        }
    }

}