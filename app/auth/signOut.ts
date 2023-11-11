import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';

Amplify.configure(awsconfig);

// >>New - Configuring Auth Module
Auth.configure(awsconfig);

function signOut() {
    Auth.signOut()
  }
  
export default signOut