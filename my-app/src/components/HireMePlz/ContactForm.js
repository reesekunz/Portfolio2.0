import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ errors, touched, values, handleSubmit, status }) => {
  const [contactInfo, setContactInfo] = useState([]);
  console.log(contactInfo);

  useEffect(() => {
    if (status) {
      setContactInfo([...contactInfo, status]);
    }
  }, [status]);

  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <Form>
        {/* Name input  */}
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        {/* Email input */}
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        {/* <Field component="select" className="select-option" name="role">
          <option>Please Choose an Option</option>
          <option value="recruiter">Recruiter</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </Field> */}

        {/* <label className="checkbox-container">
          I am a recruiter or hiring manager
          <Field
            type="checkbox"
            name="recruiter"
            checked={values.recruiter}
          />
          <span className="checkmark" />
        </label> */}

        {/* Message input  */}
        <Field
          component="textarea"
          type="text"
          name="message"
          placeholder="Message"
        />
        {touched.message && errors.message && (
          <p className="error">{errors.message}</p>
        )}

        <button type="submit">Submit!</button>
      </Form>

      {contactInfo.map(contact => (
        <p key={contact.id}>{contact.name}</p>
      ))}
    </div>
  );
};

// Higher Order Component - HOC
// Hard to share component / stateful logic (custom hooks)
// Function that takes in a component, extends some logic onto that component,
// returns a _new_ component (copy of the passed in component with the extended logic)
const FormikContactForm = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      //   recruiter: recruiter || false,
      name: name || "",
      email: email || "",
      message: message || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    message: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
    resetForm();
  }
})(ContactForm); // currying functions in Javascript

export default FormikContactForm;
