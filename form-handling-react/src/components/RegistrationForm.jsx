import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const { username, email, password } = formData; // Explicit destructuring

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!username.trim()) tempErrors.username = "Username is required";
        if (!email.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Invalid email format";
        if (!password.trim()) tempErrors.password = "Password is required";
        else if (password.length < 6) tempErrors.password = "Password must be at least 6 characters";
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted", formData);
            // Submit form logic here
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
            <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={username} 
                onChange={handleChange} 
                required 
            />
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={handleChange} 
                required 
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={handleChange} 
                required 
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
