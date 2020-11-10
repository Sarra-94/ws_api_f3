import React from "react";
import { Spinner } from "react-bootstrap";
import User from "./User";

function UserList({ users, loadUsers }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {loadUsers ? (
        <Spinner animation="border" variant="success" />
      ) : (
        users.map((el) => <User user={el} />)
      )}
    </div>
  );
}

export default UserList;
