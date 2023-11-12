'use client'

import SideNav from '@/app/ui/dashboard/sidenav';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, Auth } from 'aws-amplify';
import currentAuthenticatedUser from '../auth/authentication';

import awsconfig from '../../src/aws-exports';

Amplify.configure({...awsconfig, ssr: true});


function Layout({ children }: { children: React.ReactNode }) {

  const user = async () => {await currentAuthenticatedUser()
  console.log(user)}

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

export default withAuthenticator(Layout);
