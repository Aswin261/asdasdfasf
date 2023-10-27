import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { useParams } from "react-router-dom";

function Details({ users }) {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  console.log(users);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.username}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(Details);
