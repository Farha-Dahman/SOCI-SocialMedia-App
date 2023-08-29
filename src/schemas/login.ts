import * as Yup from "yup";

export const loginSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});
