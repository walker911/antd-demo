node {
   stage('Preparation') { // for display purposes
      // Get some code from a GitHub repository
      git 'https://github.com/walker911/antd-demo.git'
   }
   stage('Build') {
      sh 'npm install'
      sh 'npm run build'
   }
}
