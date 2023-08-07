import React from "react";
import post1 from "../../../../assets/images/image1.jpg";
import post2 from "../../../../assets/images/image2.jpg";
import post3 from "../../../../assets/images/image3.jpg";
import post4 from "../../../../assets/images/image4.jpg";
import post5 from "../../../../assets/images/image5.webp";
import post6 from "../../../../assets/images/image6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
const Post: React.FC = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="all-tab-pane"
        role="tabpanel"
        aria-labelledby="all-tab"
        tabIndex={0}
      >
        <div className="row">
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post1}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=farah"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Sara Mena</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      1125
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      348
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <cite>
                    <span>#</span>nature
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    cum, maiores doloribus laboriosam molestias id at libero
                    perspiciatis temporibus vero.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post2}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Yara"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Yara Powell</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      548
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore, sunt!.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post3}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Nancy"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Nancy Lee</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      325
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      48
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore, sunt!.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post4}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Jerry"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Jerry Jordan</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      1007
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      948
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore repellendus eius fugit iusto.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post5}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Marie Jacksone</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      78
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas odio cumque iste ad. Animi, temporibus sit ab quia
                    exercitationem id!
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post6}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Go"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Go Meeny</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      115
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      38
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <cite>
                    <span>#</span>world
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    cum, maiores doloribus laboriosam molestias id at libero
                    perspiciatis temporibus vero.
                  </p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div
        className="tab-pane fade show active"
        id="feeds-tab-pane"
        role="tabpanel"
        aria-labelledby="feeds-tab"
        tabIndex={0}
      >
        <div className="row">
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post3}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Jerry"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Jerry Jordan</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      1007
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      948
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore repellendus eius fugit iusto.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post4}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Marie Jacksone</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      78
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas odio cumque iste ad. Animi, temporibus sit ab quia
                    exercitationem id!
                  </p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="following-tab-pane"
        role="tabpanel"
        aria-labelledby="following-tab"
        tabIndex={0}
      >
        <div className="row">
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post2}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Nancy"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Nancy Lee</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      325
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      48
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore, sunt!.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post6}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Jerry"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Jerry Jordan</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      1007
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      948
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore repellendus eius fugit iusto.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post1}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Marie Jacksone</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      78
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas odio cumque iste ad. Animi, temporibus sit ab quia
                    exercitationem id!
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post5}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Go"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Go Meeny</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      115
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      38
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <cite>
                    <span>#</span>world
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    cum, maiores doloribus laboriosam molestias id at libero
                    perspiciatis temporibus vero.
                  </p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="latest-tab-pane"
        role="tabpanel"
        aria-labelledby="latest-tab"
        tabIndex={0}
      >
        <div className="row">
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post4}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Yara"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Yara Powell</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      548
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <cite>
                    <span>#</span>suscipit
                  </cite>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore, sunt!.
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post6}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Marie Jacksone</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      78
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas odio cumque iste ad. Animi, temporibus sit ab quia
                    exercitationem id!
                  </p>
                </article>
              </div>
            </div>
          </article>
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post1}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Marie Jacksone</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      78
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas odio cumque iste ad. Animi, temporibus sit ab quia
                    exercitationem id!
                  </p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="popular-tab-pane"
        role="tabpanel"
        aria-labelledby="popular-tab"
        tabIndex={0}
      >
        <div className="row">
          <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
            <div className="card-item bg-white">
              <img
                src={post2}
                className="post-Image w-100 p-1"
                alt="post image"
              />
              <div className="card-body px-2 py-2 desc">
                <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
                    alt="profile_picture"
                  />
                  <h6 className="card-title ps-1">Marie Jacksone</h6>
                  <div className="content d-flex ms-auto bg-white">
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                      105
                    </span>
                    <span className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                      78
                    </span>
                  </div>
                </div>
                <article className="card-text">
                  <cite>
                    <span>#</span>Vivarmus
                  </cite>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas odio cumque iste ad. Animi, temporibus sit ab quia
                    exercitationem id!
                  </p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Post;
