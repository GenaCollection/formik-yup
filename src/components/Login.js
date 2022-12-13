import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div>
        <h1 id="box">Login</h1>

        <form id="box" onSubmit={formik.handleSubmit}>
          <TextField
            id="firstName"
            type="text"
            label="First Name"
            onBlur={formik.handleBlur}
            error={formik.errors.firstName && formik.touched.firstName && true}
            helperText={formik.touched.firstName && formik.errors.firstName}
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <br />
          <TextField
            id="lastName"
            type="text"
            label="Last Name"
            onBlur={formik.handleBlur}
            error={formik.errors.firstName && formik.touched.lastName && true}
            helperText={formik.touched.lastName && formik.errors.lastName}
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <br />
          <TextField
            id="email"
            type="email"
            label="email"
            onBlur={formik.handleBlur}
            error={formik.errors.email && formik.touched.email && true}
            helperText={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
      {/* <Box id="box">
       <h1>Login</h1>
      <TextField />
      <br />
      <TextField />
      <br />
      <Button variant="contained">Submit </Button>
    </Box> */}
    </>
  );
};
export default Login;
