import React from "react";

const PostsTopBar: React.FC = () => {
  return (
    <div className="post-menu d-flex align-items-center justify-content-center pb-2 container">
      <h4>Recent Post</h4>
      <div className="post-option d-flex flex-sm-column ms-lg-auto ms-auto">
        <nav className="nav nav-tabs" id="myTab" role="tablist">
          <a
            className="nav-item nav-link me-3 active text-capitalize"
            id="feed-tab"
            data-bs-toggle="tab"
            data-bs-target="#feeds-tab-pane"
            type="button"
            role="tab"
            aria-controls="feeds-tab-pane"
            aria-selected="false"
          >
            Feeds
          </a>
          <a
            className="nav-item nav-link me-3 text-capitalize"
            id="all-tab"
            data-bs-toggle="tab"
            data-bs-target="#all-tab-pane"
            type="button"
            role="tab"
            aria-controls="all-tab-pane"
            aria-selected="false"
          >
            All
          </a>
          <a
            className="nav-item nav-link me-3 text-capitalize"
            id="following-tab"
            data-bs-toggle="tab"
            data-bs-target="#following-tab-pane"
            type="button"
            role="tab"
            aria-controls="following-tab-pane"
            aria-selected="false"
          >
            Following
          </a>
          <a
            className="nav-item nav-link me-2 text-capitalize"
            id="latest-tab"
            data-bs-toggle="tab"
            data-bs-target="#latest-tab-pane"
            type="button"
            role="tab"
            aria-controls="latest-tab-pane"
            aria-selected="false"
          >
            Latest
          </a>
          <a
            className="nav-item nav-link me-3 text-capitalize"
            id="popular-tab"
            data-bs-toggle="tab"
            data-bs-target="#popular-tab-pane"
            type="button"
            role="tab"
            aria-controls="popular-tab-pane"
            aria-selected="false"
          >
            Popular
          </a>
        </nav>
      </div>
    </div>
  );
};

export default PostsTopBar;
