import * as Yup from "yup";
import { countries, languages } from "../data/dummy-data";

export const createPostSchema = Yup.object({
  title: Yup.string()
    .required("Title is required.")
    .min(5, "Title must be at least 5 characters.")
    .max(50, "Title can't exceed 50 characters."),
  country: Yup.string()
    .required("Country is required.")
    .oneOf(countries, "Invalid country."),
  language: Yup.string()
    .required("Language is required.")
    .oneOf(languages, "Invalid language."),
  body: Yup.string()
    .required("Please provide the content for your post.")
    .max(1000, "Content can't exceed 1000 characters."),
  isVerified: Yup.boolean(),
});
