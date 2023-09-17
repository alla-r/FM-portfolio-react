import * as Yup from "yup";

export const CONTACT_FORM_SCHEMA = Yup.object().shape({
  name: Yup.string().required("This field is mandatory"),
  email: Yup.string()
    .email("Sorry, invalid format here")
    .required("This field is mandatory"),
  message: Yup.string().required("This field is mandatory"),
});
