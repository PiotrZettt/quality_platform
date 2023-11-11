
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

async function currentAuthenticatedUser() {
  try {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: false // Optional and is false by default. If set to true, this call 
      // will send a request to Cognito to get the latest user data.
    });
    console.log(user);
    return user
  } catch(err) {
    console.log(err);
  }
};

export default currentAuthenticatedUser


