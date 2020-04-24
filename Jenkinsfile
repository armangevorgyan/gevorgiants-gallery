def getNodeEnv(){
   switch(env.BRANCH_NAME) {
       case "develop":
           return 'development'
       case "acceptance":
           return 'acceptance'
       case "master":
           return 'production'
       default:
           return 'development'
   }
}

def getAppVersion (GIT_COMMIT, NODE_ENV){
   def appVersion = ""
   if(env.BRANCH_NAME == 'master') {
       pkg = readJSON(file: "package.json")
       appVersion += "${pkg.version}"
   }
   if(env.BRANCH_NAME == "develop" || env.BRANCH_NAME == "acceptance") {
       appVersion +="${NODE_ENV}-${GIT_COMMIT}"
   }

   return appVersion;
}

pipeline {
    environment {
        GIT_COMMIT = """${sh(
            returnStdout: true,
            script: "git rev-parse --short HEAD"
        )}""".trim()
        NODE_ENV = getNodeEnv()
        APP_VERSION = getAppVersion(env.GIT_COMMIT, env.NODE_ENV)
    }
    options {
        buildDiscarder logRotator(numToKeepStr: '5')
    }
    agent any
    stages {
        stage("Build") {
            steps {
                script {
                    image = docker.build(
                        "$DOCKER_REGISTRY/gevorgiants-gallery:${env.NODE_ENV}",
                        "--build-arg script=build:${env.NODE_ENV} --build-arg APP_VERSION=${env.APP_VERSION} ."
                    )
                }
            }
        }
        stage("Push") {
            steps {
                script {
                    docker.withRegistry(
                        "https://$DOCKER_REGISTRY/",
                        "nexus"
                    ) {
                        image.push()
                        if(env.BRANCH_NAME == 'master') {
                            image.push(env.APP_VERSION)
                        }
                    }
                }
                sh "docker rmi ${image.id}"
            }
        }

        stage("DeployDEV") {
            when {
                 expression {
                    return env.BRANCH_NAME == 'develop'
                }
            }
            steps {
                build(
                    job: 'DeployDEV/master',
                    parameters: [
                        booleanParam(name: "gallleryUI", value: true)
                    ],
                    propagate: 'true',
                    wait: 'false'
                )
            }
        }

        stage("DeployACC") {
            when {
                expression {
                    return env.BRANCH_NAME == 'acceptance'
                }
            }
            steps {
                build(
                    job: 'DeployACC/master',
                    parameters: [
                        booleanParam(name: "gallleryUI", value: true)
                    ],
                    propagate: 'true',
                    wait: 'false'
                )
            }
        }
    }
}
