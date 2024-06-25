// src/SignIn.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Layout from '../../components/layout/Layout';

const SignIn = () => {
  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">My Account</h2>
        <div>
          <h3 className="text-xl mb-4">Login</h3>
          <p className="mb-4">If you have an account with us, please log in.</p>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Retype Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
              Sign UP
            </button>
            <div className="text-center mt-4">
              <a href="login" className="text-orange-500 hover:underline">
                Sign In
              </a>
            </div>
          </form>
          <div className="flex items-center justify-center mt-6">
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
              <FontAwesomeIcon icon={faFacebookF} className="mr-2" /> FACEBOOK
            </button>
            <button className="flex items-center bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" /> GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
</Layout>
  );
};

export default SignIn;
