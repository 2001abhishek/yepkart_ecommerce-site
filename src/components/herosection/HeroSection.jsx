import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full h-screen overflow-hidden sticky top-0 -z-50">
      <Slider {...settings} className="h-full">
        <div className="h-screen relative">
          <img
            src="/src/image/hero_banner.jpeg"
            alt="Slide 1"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 border-t-4 border-white"></div> {/* Increased border thickness */}
              </div>
              <div className="flex justify-center">
                <button className="relative px-6 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen relative">
          <img
            src="http://onesalonica.com/media/775299/1440x720_ck_8.jpg?crop=0,0,0,0&cropmode=percentage&width=1440&height=720&rnd=132552944200000000"
            alt="Slide 2"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 border-t-4 border-white"></div> {/* Increased border thickness */}
              </div>
              <div className="flex justify-center">
                <button className="rounded-full relative px-6 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-600">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen relative">
          <img
            src="https://images.unsplash.com/photo-1496602746490-1c2858725ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 3"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 border-t-4 border-white"></div> {/* Increased border thickness */}
              </div>
              <div className="flex justify-center">
                <button className="rounded-full relative px-6 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-600 ">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;
