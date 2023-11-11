'use client'
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';

import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from '../../src/aws-exports';
Amplify.configure(awsconfig);

function Dashboard() {

  try {
    const user = Auth.currentAuthenticatedUser({
      bypassCache: false // Optional and is false by default. If set to true, this call 
      // will send a request to Cognito to get the latest user data.
    });
    console.log(user);
  } catch(err) {
    console.log(err);
  }

  return (<div>
    This is the Dashboard, hi
  </div>
    
  );
}

export default withAuthenticator(Dashboard)


