import React from "react";
import { friendsData } from "../../../../data/dummy-data";
const Friends: React.FC = () => {
  return (
    <nav className="p-3">
      <div className="title my-3">friends</div>
      {friendsData.map((friend, index) => (
        <a
          href="#"
          className="mb-2 d-flex align-items-center justify-content-center"
          key={index}
        >
          <img
            src={`https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=${friend.seed}`}
            alt="profile_picture"
            className="me-2"
          />
          <h6 className="name card-title">{friend.name}</h6>
          {friend.isActive ? (
            <span className="active ms-auto me-1" />
          ) : (
            <span className="inactive ms-auto me-1">{friend.lastActive}</span>
          )}
        </a>
      ))}
    </nav>
  );
};

export default Friends;
