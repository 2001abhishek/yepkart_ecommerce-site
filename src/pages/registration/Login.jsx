import React from 'react';
import Layout from "../../components/layout/Layout";

const Login = () => {
  return (
    <Layout>
        <div className="flex justify-center items-center min-h-screen px-4">
          <div className="p-8 w-full max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
            <h1 className="text-xl md:text-4xl font-bold text-center pb-12">My Account</h1>
            <form className="border w-full px-4 sm:px-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 pt-6 md:pt-6">Login</h2>
              <h2 className="text-xl md:text-2xl font-bold text-gray-500 pt-3 md:pt-6">If you have an account with us, please log in.</h2>
              <div>
                <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border rounded w-full px-4 py-2 md:pl-8 md:py-2 mt-4 md:mt-8 text-lg md:text-2xl text-gray-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border rounded w-full px-4 py-3 md:pl-8 md:py-2 mt-4 md:mt-8 text-lg md:text-2xl text-gray-900"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="bg-black hover:bg-blue-700 text-white text-md sm:text-xl font-bold px-8 py-2"
                >
                  Sign In
                </button>
              </div>
                <a href="#" className="text-yellow-500 text-xl md:text-3xl text-center hover:text-blue-800 mt-2 md:mt-4">
                  Forgot your Password?
                </a>
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

export default Login;
