import React, { useState } from "react";
import { Form, ErrorMessage, Formik } from "formik";
import { Dropdown } from "primereact/dropdown";
import { countries, languages } from "../../../data/dummy-data";
import { createPostSchema } from "../../../schemas/createPostSchema";
import { Post } from "../../types/types";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "./CreatePost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from "../../../assets/images/default-avatar.jpg";

interface PostFormProps {
  addPostFunc: (values: Post) => Promise<void>;
}

const PostForm: React.FC<PostFormProps> = ({ addPostFunc }) => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>();
  const storedUserName = localStorage.getItem("user_name");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  return (
    <Formik
      initialValues={{
        user_id: Math.floor(Math.random() * 10000),
        user_name: storedUserName || "",
        user_avatar: defaultAvatar,
        title: "",
        body: "",
        hashtags: "",
        image_url: "",
        likes: 0,
        comments: 0,
        shares: 0,
        timestamp: new Date().toISOString(),
        country: "",
        language: "",
        is_verified: false,
      }}
      validationSchema={createPostSchema}
      onSubmit={async (values) => {
        try {
          if (selectedImage) {
            const reader = new FileReader();
            reader.onload = () => {
              const dataURL = reader.result as string;
              values.image_url = dataURL;
              addPostFunc(values);
            };
            reader.readAsDataURL(selectedImage);
          } else {
            addPostFunc(values);
          }
        } catch (error) {
          console.error("Error adding post:", error);
        }
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <section className="h-100 d-flex mt-4 mb-5">
          <Form className="container-fluid add-post-form">
            <h4 className="mt-2">Create Your New Post!</h4>
            <div className="w-100 d-flex justify-content-center">
              <div className="w-75 text-center mt-3 py-3 p-3 post-container">
                <div className="border p-2">
                  <div className="justify-content-center w-100 mt-4">
                    <span className="p-float-label">
                      <InputText
                        id="title"
                        value={values.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleChange(e)
                        }
                        className="form-control"
                      />
                      <label htmlFor="title">Title</label>
                    </span>
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="error text-start"
                    />
                  </div>
                  <div className="justify-content-center w-100 mt-4">
                    <span className="p-float-label">
                      <InputText
                        id="hashtags"
                        value={values.hashtags}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleChange(e)
                        }
                        className="form-control hashtags-input"
                      />
                      <label htmlFor="hashtags">
                        Put your hashtags here (please don&apos;t use
                        &apos;#&apos; tag).
                      </label>
                    </span>
                  </div>
                  <div className="justify-content-center w-100 mt-4">
                    <span className="p-float-label">
                      <InputTextarea
                        id="body"
                        value={values.body}
                        onChange={handleChange}
                        rows={5}
                        cols={30}
                        className="form-control"
                      />
                      <label htmlFor="body">
                        What&apos;s on your mind, {`${storedUserName}` + "?"}
                      </label>
                    </span>
                    <ErrorMessage
                      name="body"
                      component="div"
                      className="error text-start"
                    />
                  </div>
                  <div className="row d-flex align-items-end">
                    <div className="d-flex col-sm-12 col-md-4">
                      <div className="d-flex mt-5 me-3">
                        <Checkbox
                          id="is_verified"
                          name="is_verified"
                          value="is_verified"
                          checked={values.is_verified}
                          onChange={handleChange}
                          title="Verified Post"
                        />
                        <label
                          htmlFor="is_verified"
                          className="custom-txt ms-2"
                        >
                          Verified
                        </label>
                      </div>
                      <label
                        htmlFor="image_url"
                        className="custom-txt d-flex align-items-end"
                        title="Upload Photo"
                      >
                        <FontAwesomeIcon
                          icon={faImage}
                          className="me-2 gallery align-items-center"
                        />
                        Upload Photo
                      </label>
                      <input
                        type="file"
                        id="image_url"
                        name="image_url"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e)}
                        className="display-none"
                      />
                    </div>
                    <div className="col-sm-12 col-md-8">
                      <div className="image-container mx-2 mt-2 align-items-end">
                        {selectedImage && (
                          <div>
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              alt="Selected"
                              className="selected-image"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-lg-6 mt-4">
                    <Dropdown
                      id="country"
                      name="country"
                      value={values.country}
                      options={countries.map((country) => ({
                        label: country,
                        value: country,
                      }))}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Select your country"
                      filter
                      className="w-75 md:w-14rem"
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="error text-start ms-5"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6 mt-4">
                    <Dropdown
                      id="language"
                      name="language"
                      value={values.language}
                      options={languages.map((language) => ({
                        label: language,
                        value: language,
                      }))}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Select your language"
                      filter
                      className="w-75 md:w-14rem"
                    />
                    <ErrorMessage
                      name="language"
                      component="div"
                      className="error text-start ms-5"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-5 w-50 btn add-post-submit fw-bold"
                >
                  Post
                </button>
              </div>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default PostForm;
