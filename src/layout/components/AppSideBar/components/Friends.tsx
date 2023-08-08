import React from "react";
const friendsData = [
  {
    name: "Alex Guerrero",
    isActive: false,
    lastActive: "10 min",
    seed: "sally",
  },
  {
    name: "Sara Mendoza",
    isActive: true,
    lastActive: "",
    seed: "farah",
  },
  {
    name: "Ronald Roberts",
    isActive: true,
    lastActive: "",
    seed: "Ali",
  },
  {
    name: "Nancy Lee",
    isActive: false,
    lastActive: "12 min",
    seed: "sara",
  },
  {
    name: "Marie Jacksone",
    isActive: false,
    lastActive: "7 min",
    seed: "Marie",
  },
  {
    name: "Nick Powell",
    isActive: true,
    lastActive: "",
    seed: "Nick",
  },
  {
    name: "Sandra Rivera",
    isActive: true,
    lastActive: "",
    seed: "Sandra",
  },
  {
    name: "Alex Freeman",
    isActive: false,
    lastActive: "5 min",
    seed: "Alex",
  },
  {
    name: "Jerry Jordan",
    isActive: true,
    lastActive: "",
    seed: "Jerry",
  },
];

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
