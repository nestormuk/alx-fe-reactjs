import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.username) tempErrors.username = "Username is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required"; // Fixed issue here
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Fixed typo here
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted", formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
