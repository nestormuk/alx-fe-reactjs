import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("Form submitted", values);
            }}
        >
            {() => (
                <Form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
                    <Field type="text" name="username" placeholder="Username" />
                    <p style={{ color: "red" }}>
                        <ErrorMessage name="username" />
                    </p>

                    <Field type="email" name="email" placeholder="Email" />
                    <p style={{ color: "red" }}>
                        <ErrorMessage name="email" />
                    </p>

                    <Field type="password" name="password" placeholder="Password" />
                    <p style={{ color: "red" }}>
                        <ErrorMessage name="password" />
                    </p>

                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
