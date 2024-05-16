import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate(); // Initialize useHistory hook

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://uwb-backend.onrender.com/login', loginState);
            const { success, message } = response.data;
            if (success) {
                toast.success(message);
                // Redirect user to homepage upon successful login
                // navigate('/home');
            } else {
                toast.error(message);
            }
        } catch (error) {
            console.error('Error authenticating user:', error.message);
            toast.error('An error occurred while authenticating. Please try again later.');
        }
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} /> {/* Add ToastContainer here */}
        </form>
    )
}
