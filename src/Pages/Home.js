import React from "react";
import UserList from "../Component/UserList";

function Home({ users, loadUsers }) {
  return (
    <div>
      <UserList users={users} loadUsers={loadUsers} />
    </div>
  );
}

export default Home;
