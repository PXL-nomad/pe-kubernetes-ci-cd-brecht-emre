def myVersion = 'UNKNOWN'

podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        command:
        - sleep
        args:
        - 9999999
        volumeMounts:
          - name: kaniko-secret
            mountPath: /kaniko/.docker
      restartPolicy: Never
      volumes:
      - name: kaniko-secret
        secret:
            secretName: dockercred
            items:
            - key: .dockerconfigjson
              path: config.json
      - name: m2
        hostPath:
          path: /root/.m2
''') {
  node(POD_LABEL) {

    stage('Angular: Retrieve project') {
      git url: 'https://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@github.com/PXL-nomad/pe-kubernetes-ci-cd-brecht-emre.git', branch: 'main'
      container('angular') {
        stage('Angular: Build project') {
        //   sh '''
        //     mvn clean package
        //   '''
        //   myVersion = sh(returnStdout: true, script: 'mvn help:evaluate -Dexpression=project.version -q -DforceStdout').trim()
        }
      }
    }

    stage('kaniko: Build & Deploy Images') {
      container('kaniko') {
        stage('Build & Deploy backend to dockerhub') {
          dir("BackEnd-Applicatie") {
          env.TAG = 001
          sh '''
            /kaniko/executor --context `pwd` --destination architius/backend-image:$TAG
            echo -e deployed architius/backend-image:$TAG
          '''
          }
        }
       stage('Build & Deploy frontend to dockerhub') {
          dir("FrondEnd-Applicatie") {
          env.TAG = 001
          sh '''
            /kaniko/executor --context `pwd` --destination architius/frontend-image:$TAG
            echo -e deployed architius/frontend-image:$TAG
          '''
          }
        }
      }
    }
  }
}
