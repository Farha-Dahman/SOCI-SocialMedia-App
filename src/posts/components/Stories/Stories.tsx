import React from "react";
import Story from "./components/Story";
import StoriesHeader from "./components/StoriesHeader";
const Stories: React.FC = () => {
  return (
    <div className="Stories-container row mb-5">
      <StoriesHeader />
      <div className="stories d-flex">
        <Story />
      </div>
    </div>
  );
};

export default Stories;
