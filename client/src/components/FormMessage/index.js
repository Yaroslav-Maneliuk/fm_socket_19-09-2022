import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ChatActionCreators from "../../actions/chatActionCreators";

const FormMessage = () => {
  const { user } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const { createMessageRequest } = bindActionCreators(
    ChatActionCreators,
    dispatch
  );
  const onSubmit = (values, formikBag) => {
    console.log(values);
    createMessageRequest(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ content: "", login: "" }} onSubmit={onSubmit}>
      <Form>
        <Field name="content" placeholder="content" />
        <Field name="login" placeholder="login" />
        <input type="hidden" value={user._id} />
        <input type="submit" value="send message" />
      </Form>
    </Formik>
  );
};

export default FormMessage;
