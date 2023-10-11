import * as Yup from "yup";

export const simpleFormSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter a username"),
    // email: Yup.string().email().required("please enter your email address"),
    // phone: Yup.string().min(10).max(12).required("please enter your number"),
    password: Yup.string().min(6).required("Please enter your password"),
    // confirm_password: Yup.string().required().oneOf([Yup.ref('password'),null,"password must match"])
  
})