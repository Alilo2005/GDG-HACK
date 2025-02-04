"use client";

import { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
    };

    return (
        <div className="max-w-lg mx-auto p-10 bg-white shadow-xl rounded-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8 transition-all ease-in-out duration-300">
                Welcome Back!
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                    <label htmlFor="email" className="block mb-3 text-lg font-medium text-gray-900 dark:text-white">
                        Your Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all ease-in-out duration-300"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div className="mb-8">
                    <label htmlFor="password" className="block mb-3 text-lg font-medium text-gray-900 dark:text-white">
                        Your Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all ease-in-out duration-300"
                        required
                    />
                </div>
                <div className="flex items-center mb-8">
                    <input
                        id="remember"
                        type="checkbox"
                        checked={formData.remember}
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 transition-all ease-in-out duration-300"
                    />
                    <label htmlFor="remember" className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
                        Remember me
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all ease-in-out duration-300 transform hover:scale-105"
                >
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
