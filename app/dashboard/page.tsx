import currentAuthenticatedUser from "../auth/authentication";

async function Dashboard() {
  const user = currentAuthenticatedUser()
  return (<div>
    This is the Dashboard, hi {user}
  </div>
  );
}

export default Dashboard


