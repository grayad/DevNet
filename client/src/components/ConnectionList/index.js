import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLEUSER } from "../../utils/queries";
const ConnectionList = ({ username }) => {
  const { loading, data } = useQuery(QUERY_SINGLEUSER, {
    variables: { username: username },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const user = data?.user;
  const connectionCount = user.connectionCount;
  const connections = user.connections;

  if (connectionCount < 0) {
    return (
      <p className="bg-dark text-light p-3">
        {username}, you don't have any connections
      </p>
    );
  }

  return (
    <div>
      <h5>
        {username}'s {connectionCount}{" "}
        {connectionCount === 1 ? "connection" : "connections"}
      </h5>
      <div className="connection-buttons">
        {connections.map((connection) => (
          <button className="m-2 btn-connection" key={connection._id}>
            <Link to={`/profile/${connection.username}`}>
              {connection.username}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectionList;
