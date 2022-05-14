pipeline{

  agent any

  environment {
    dockerhub=credentials('dockerhub')
    IMAGE_NAME="safderun/coineus-frontend"
  }

  stages{

    stage('docker image build'){
      steps{
        sh "docker image build -t $IMAGE_NAME:latest -f ./Docker/Dockerfile ."
      }
    }

    stage('docker image push'){
      steps{
        sh "echo $dockerhub_PSW | docker login -u $dockerhub_USR --password-stdin"
        sh "docker tag $IMAGE_NAME:latest $IMAGE_NAME:$BUILD_NUMBER"
        sh "docker push $IMAGE_NAME:latest"
        sh "docker push $IMAGE_NAME:$BUILD_NUMBER"
        sh "docker rmi $IMAGE_NAME:$BUILD_NUMBER $IMAGE_NAME:latest"
      }
    }

    stage('deploy'){
      agent {label 'ec2'}
      environment {
        SERVER_BUILD_NUMBER = "$BUILD_NUMBER"
      }
      steps{
        sh "/coineus-frontend/Docker/update-frontend.sh"
      }
    }
  }

  post {
        success {
          mail (bcc: '', body: "Latest deploy for Coineus Frontend was successfull!. \n Build Number: $BUILD_NUMBER", cc: 'mlheymen.ms@gmail.com', from: 'Jenkins', replyTo: '', subject: 'Coineus Frontend Deploy Succesfull!', to: 'safderun@proton.me')
        }
        failure {
          mail bcc: '', body: '''Latest deploy for Coineus Frontend was failed!. 
          Build Number: $BUILD_NUMBER''', cc: 'mlheymen.ms@gmail.com', from: 'Jenkins', replyTo: '', subject: '!!!Coineus Frontend Deploy Failed!!!', to: 'safderun@proton.me'
        }
    }

}