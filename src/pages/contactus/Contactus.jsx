import React from 'react';
import Layout from '../../components/layout/Layout';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contactus() {
  const underlineStyle = {
    textDecoration: 'underline',
    textDecorationThickness: '2px', // Adjust thickness as needed
    textUnderlineOffset: '4px', // Adjust offset as needed
    textDecorationColor: 'currentColor'
  };

  return (
    <Layout>
      <div className="h-screen relative">
        <img src="https://wallpapercave.com/wp/wp5459838.jpg" alt="Batman" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-screen relative flex">
        {/* Left Side - Contact Information */}
        <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-sm mb-6">Say something to start a live chat!</p>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-lg mr-2" />
              <a href="tel:+919465342092" className="hover:underline">
                +91-9465342092
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-lg mr-2" />
              <a href="mailto:badpewdiepie@gmail.com" className="hover:underline">
                badpewdiepie@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-lg mr-2" />
              <p>KASHAPATH</p>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-white w-4 h-4 rounded-full mr-2"></button>
            </div>
           
          </div>
        </div>
         <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="80" r="80" fill="#333" transform="rotate(45 80 150)" />
              <circle cx="130" cy="130" r="40" fill="#666" transform="rotate(45 80 80)" />
            </svg>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-2/3 bg-white p-8 flex items-center justify-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="First Name" style={underlineStyle} />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="last-name" type="text" placeholder="Last Name" style={underlineStyle} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Email" style={underlineStyle} />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone-number">
                  Phone Number
                </label>
                <input className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="phone-number" type="text" placeholder="Phone Number" style={underlineStyle} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="query">
                  Query
                </label>
                <textarea className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="query" placeholder="Your Query" style={underlineStyle}></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="review">
                  Review
                </label>
                <textarea className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="review" placeholder="Your Review" style={underlineStyle}></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="mt-4 px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-700 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contactus;