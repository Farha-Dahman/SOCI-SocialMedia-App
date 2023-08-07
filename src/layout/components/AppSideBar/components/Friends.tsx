import React from "react";

const Friends: React.FC = () => {
  return (
    <nav className="p-3">
      <div className="title my-3">friends</div>
      <a
        href="#"
        className="mb-2 d-flex align-items-center justify-content-center"
      >
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=sally"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Alex Guerrero</h6>
        <span className="inactive ms-auto me-1">10 min</span>
      </a>
      <a
        href="#"
        className="mb-2 d-flex align-items-center justify-content-center"
      >
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=farah"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Sara Mendoza</h6>
        <span className="active ms-auto me-1" />
      </a>
      <a href="#" className="mb-2 d-flex align-items-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Ali"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Ronald Roberts</h6>
        <span className="active ms-auto me-1" />
      </a>
      <a href="#" className="mb-2 d-flex align-items-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=sara"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Nancy Lee</h6>
        <span className="inactive ms-auto me-1">12 min</span>
      </a>
      <a href="#" className="mb-2 d-flex align-items-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Marie Jacksone</h6>
        <span className="inactive ms-auto me-1">7 min</span>
      </a>
      <a href="#" className="mb-2 d-flex align-items-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Nick"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Nick Powell</h6>
        <span className="active ms-auto me-1" />
      </a>
      <a href="#" className="mb-2 d-flex align-items-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Sandra"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Sandra Rivera</h6>
        <span className="active ms-auto me-1" />
      </a>
      <a href="#" className="mb-2 d-flex align-items-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Alex"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Alex Freeman</h6>
        <span className="inactive ms-auto me-1">5 min</span>
      </a>
      <a href="#" className="mb-2 d-flex align-items-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Jerry"
          alt="profile_picture"
          className="me-2"
        />
        <h6 className="name card-title">Jerry Jordan</h6>
        <span className="active ms-auto me-1" />
      </a>
    </nav>
  );
};

export default Friends;
