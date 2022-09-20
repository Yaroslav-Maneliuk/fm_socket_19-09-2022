import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ChatActionCreators from "../../actions/chatActionCreators";

const FormMessage = () => {
  const dispatch = useDispatch();
  const { createMessageRequest } = bindActionCreators(
    ChatActionCreators,
    dispatch
  );
  const onSubmit = (values, formikBag) => {
    createMessageRequest(values)
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ content: "", user: "" }} onSubmit={onSubmit}>
      <Form>
        <Field name="content" placeholder="content" />
        <Field name="user" placeholder="user" />
        <input type="submit" value="send message" />
      </Form>
    </Formik>
  );
};

export default FormMessage;
