import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

async function currentAuthenticatedUser() {
  try {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: true // Optional and is false by default. If set to true, this call 
      // will send a request to Cognito to get the latest user data.
    });
    console.log('Comment', user);
  } catch(err) {
    console.log('Error', err);
  }
};

export default currentAuthenticatedUser


