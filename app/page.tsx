import Image from 'next/image'
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';

import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

export default async function Home() {

  try {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: false // Optional and is false by default. If set to true, this call 
      // will send a request to Cognito to get the latest user data.
    });
    console.log(user);
  } catch(err) {
    console.log(err);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>This is the landing Page, hi </h3>
      <div className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#627d65] to-[#3027a6] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
        </div>
      </div>
    </div>
    </main>
  )
}
