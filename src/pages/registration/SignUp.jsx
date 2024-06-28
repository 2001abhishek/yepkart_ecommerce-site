import React from 'react';
import Layout from "../../components/layout/Layout";

const Signup = () => {
  return (
    <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="p-8 w-full max-w-xl">
            <h1 className="text-xl sm:text-4xl font-bold text-center pb-8">Create An Account</h1>
            <form className='border w-full text-center md:text-start'>
              <div className="mb-4">
                <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="fname">
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder='FIRST NAME'
                  className="text-md border rounded w-[200px] p-2 pl-4 mb-2 md:pl-8 p-4 sm:p-1 mt-4 sm:mb-2 sm:ml-16 sm:w-[400px] sm:text-xl text-gray-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder='LAST NAME'
                  className="border rounded w-[200px] p-2 pl-4 mb-0 sm:pl-8 p-4 sm:p-1 sm:ml-16 sm:mb-0 sm:w-[400px] text-md sm:text-xl text-gray-900 mb-3"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder='EMAIL'
                  className="border rounded w-[200px] p-2 pl-4 mb-0 sm:pl-8 p-4 sm:p-1 sm:mb-0 sm:ml-16 sm:w-[400px] text-md sm:text-xl text-gray-900 8mb-3"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder='PASSWORD'
                  className="border rounded p-2 w-[200px] pl-4 sm:pl-8 p-4 sm:p-1 mt-0 sm:ml-16 sm:w-[400px] text-md sm:text-xl text-gray-900 mb-3"
                />
              </div>
              <h2 className='text-md sm:text-2xl font-bold text-gray-500 pl-0 sm:pl-16 mb-6 text-center sm:text-left'>Subscribe to stay updated with new products and offers!</h2>
              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="bg-black hover:bg-blue-700 text-white text-md sm:text-xl font-bold px-8 py-2"
                >
                  SUBMIT
                </button>
              </div>
              <div className="mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-8">
                <button
                  type="button"
                  className=" md:w-auto bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 mt-2 px-2 rounded flex items-center justify-center mb-2 md:mb-0"
                >
                  <img src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" className="w-6 md:w-10 mr-2 md:mr-4" /> FACEBOOK
                </button>
                <button
                  type="button"
                  className=" bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-2 mt-2 rounded flex items-center justify-center mb-2"
                >
                  <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt="" className='w-8 md:w-14 md:mt-2 mr-6 md:mr-4 '/>GOOGLE
                </button>
              </div>
            </form>
          </div>
        </div>
    </Layout>
  );
}

export default Signup;
