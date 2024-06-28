import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center"></Link>

            <div className="md:flex">
              <div className="mr-12 w-full md:w-1/5 md:mb-0  mt-14 mb-6">
                <h2 className="mb-16 mt-4 text-xl font-bold text-white uppercase">
                  ABOUT US
                </h2>
                <h3 className="mb-8 mt-12 text-lg text-white">
                  YepCart is a plus size brand that creates merchandise based on
                  slice of life of a young person in India
                </h3>
                <div className="md: ">
                  <h2 className="mb-8 text-2xl font-bold text-white">
                    Stay Connected
                  </h2>
                  <div className="flex">
                    <i className="fa-brands fa-facebook-f text-white text-3xl mr-6"></i>
                    <i className="fa-brands fa-instagram text-white text-3xl mr-6"></i>
                    <i className="fa-brands fa-pinterest-p text-white text-3xl"></i>
                  </div>
                </div>
              </div>

              <div className="mr-12 w-full md:w-1/5 mb-6 md:mb-0">
                <h2 className="text-xl font-bold text-white md: mt-14 mb-6">
                  Plus Size Men's Clothing
                </h2>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Men's Shirt
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Men's T-Shirt
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Men's Jeans
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Men's Shorts
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Men's Track Pants
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Men's Jacket
                </h3>
              </div>

              <div className="mr-12 w-full md:w-1/5 mb-6 md:mb-0">
                <h2 className="text-xl font-bold text-white md: mt-14 mb-6">
                  Plus Size Women's Clothing
                </h2>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Women's Dress
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Women's Jeans
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Women's Top
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Women's Jacket
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Women's Sweatshirt
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Plus Size Women's Nightwear
                </h3>
              </div>

              <div className="w-full md:w-1/5 mb-6 md:mb-0">
                <h2 className="text-xl font-bold text-white md: mt-14 mb-6">
                  Links
                </h2>
                <h3 className="text-white text-lg underline mb-1">Search</h3>
                <h3 className="text-white text-lg underline mb-1">
                  Refund Policy
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Shipping Policy
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Terms of Service
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Return your order
                </h3>
                <h3 className="text-white text-lg underline mb-1">
                  Privacy Policy
                </h3>
                <h3 className="text-white text-lg underline mb-1">Blogs</h3>
                <h3 className="text-white text-lg underline mb-1">Offers</h3>
                <h3 className="text-white text-lg underline mb-1">Sitemap</h3>
              </div>

              <div className="w-full md:w-1/5">
                <h2 className="text-xl font-bold text-white uppercase md: mt-14 mb-6">
                  Contact US
                </h2>
                <h3 className="text-lg text-white">
                  Yeshwanthpur Suburb II Stage, Yesvanpur Suburb, Peenya,
                  Bengaluru, Karnataka 560058
                </h3>
                <h3 className="text-lg text-white">Phone: 080-69806280</h3>
                <h3 className="text-lg text-white">Email:</h3>
                <h3 className="text-lg text-white underline">
                  support@campussutra.com
                </h3>
                <h3 className="text-lg text-white underline">FAQ</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}