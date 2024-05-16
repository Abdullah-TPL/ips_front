import React from 'react';
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {

        navigate('/login');
    };

    return (
        <>
            <Header
                heading="HomePage"
                paragraph="Welcome to Home Page"
                linkName="Signup"
                linkUrl="/signup"
            />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
