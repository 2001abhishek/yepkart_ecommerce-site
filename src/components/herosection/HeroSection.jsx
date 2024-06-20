
import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

function AllBlogs() {
  const context = useContext(myContext);
  const { mode } = context;
  const backgroundImage = 'https://media.istockphoto.com/id/1430307936/photo/healthy-green-monstera-plant-in-white-ceramic-pot-on-wooden-side-table-with-sunlight-from.webp?b=1&s=170667a&w=0&k=20&c=CsCbRvW_VYNgN04Nzt1Ce52bDkVM92IjNPTgLnLa7wM=';

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Layout>
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl text-white drop-shadow-2xl font-bold underline underline-offset-8">GALLERY</h1>
          </div>
        </div>
      </section>

      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-20 h-20 font-bold w-full">
        <div className="container mx-auto max-w-full px-4 flex justify-between items-center">
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className="hidden md:flex justify-center space-x-44 mt-7 origin-center">
            <a href="#" className="relative text-teal-500 hover:text-teal-600 font-bold ml-20">
              FONT EXTERIOR
              <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-500"></span>
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-teal-600 ml-20">
              HOTEL LOBBY
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-teal-600 ml-20">
              ROOM
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-teal-600 ml-20">
              DINING
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-teal-600 ml-20">
              SPA
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-teal-600 ml-20">
              POOL
            </a>
          </div>
        </div>
        <div className={`md:hidden flex flex-col space-y-4 mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-teal-500 hover:text-teal-600 font-bold">
            FONT EXTERIOR
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">
            HOTEL LOBBY
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">
            ROOM
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">
            DINING
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">
            SPA
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">
            POOL
          </a>
        </div>
      </nav>
      </Layout>
  );
}
export default HeroSection;