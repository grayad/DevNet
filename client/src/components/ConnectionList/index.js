import React from 'react';
import { Link } from 'react-router-dom';

const ConnectionList = ({ connectionCount, username, connections }) => {
  if (!connections || !connections.length) {
    return <p className="bg-dark text-light p-3">{username}, you don't have any connections</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {connectionCount} {connectionCount === 1 ? 'friend' : 'friends'}
      </h5>
      {connections.map(connection => (
        <button className="btn w-100 display-block mb-2" key={connection._id}>
          <Link to={`/profile/${connection.username}`}>{connection.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default ConnectionList;
