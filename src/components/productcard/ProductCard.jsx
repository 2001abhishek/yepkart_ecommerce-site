import React from "react";

function ProductCard() {
  const categories = [
    {
      name: "JEANS",
      icon: "https://5.imimg.com/data5/CB/XM/MY-62959177/denim-shorts-man.jpg",
    },
    { name: "DRESSES", icon: "https://i.pinimg.com/564x/0f/f2/e5/0ff2e5df344a229d8f0febebe66cebe3.jpg" },
    { name: "SHIRTS", icon: "https://getketchadmin.getketch.com/product/8905040506708/660/HLSH011340_4.JPG" },
    { name: "TOPS", icon: "https://images.glowroad.com/faceview/hj/bf/hj/imgs/6b28574e-7549-4158-a707-01f0f1cb2acd_791579-xlgn400x400.jpg?productId=P-7894656" },
  ];

  const Card = ({ image, title, oldPrice, newPrice, discount }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-96 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex items-center mt-2">
            <span className="text-gray-500 line-through mr-2">{oldPrice}</span>
            <span className="text-green-500 font-bold">{newPrice}</span>
          </div>
          <div className="mt-2 text-sm text-red-500 font-semibold">{discount}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white drop-shadow-2xl">
      {/* Category Bar */}
      <div className="bg-yellow-500 py-4">
        <div className="container mx-auto flex flex-wrap justify-center items-center space-x-4 md:space-x-72">
          {categories.map((category, index) => (
            <div key={index} className="cursor-pointer flex flex-col items-center m-2 md:m-4">
              <img
                src={category.icon}
                alt={category.name}
                className="w-10 h-10 mb-2 md:w-20 md:h-20 rounded-full"
              />
              <span className="text-white text-xs md:text-base">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Header with Title and Button */}
      <div className="container mx-auto py-6 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Turn heads as you walk</h1>
        <p className="text-gray-600">Plus Size Men's Collection</p>
        <button className="mt-4 px-4 py-2 border border-black text-black font-bold">
          VIEW COLLECTION
        </button>
      </div>

      {/* Product Card Content */}
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <Card 
          image="https://imgix.bustle.com/rehost/2016/9/13/18b23d7e-76b8-41ff-a880-ee679e418900.jpg?w=614&q=50&dpr=2" 
          title="Slim Fit Denim Jeans" 
          oldPrice="Rs. 2,400" 
          newPrice="Rs. 1,200" 
          discount="50% Off" 
        />
        <Card 
          image="https://c7.alamy.com/comp/2KAE14G/epsom-surrey-uk-may-28-2022-close-up-of-a-man-walking-towards-camera-wearing-denim-jeans-and-black-leather-gloves-in-black-and-white-2KAE14G.jpg" 
          title="Slim Fit Denim Jeans" 
          oldPrice="Rs. 2,400" 
          newPrice="Rs. 1,200" 
          discount="50% Off" 
        />
        <Card 
          image="https://c7.alamy.com/comp/2E2NMGP/man-wearing-denim-jeans-jacket-with-tattooed-arm-closeup-2E2NMGP.jpg" 
          title="Slim Fit Denim Jeans" 
          oldPrice="Rs. 2,400" 
          newPrice="Rs. 1,200" 
          discount="50% Off" 
        />
        <Card 
          image="https://c7.alamy.com/comp/2E2NMGP/man-wearing-denim-jeans-jacket-with-tattooed-arm-closeup-2E2NMGP.jpg" 
          title="Slim Fit Denim Jeans" 
          oldPrice="Rs. 2,400" 
          newPrice="Rs. 1,200" 
          discount="50% Off" 
        />
      </div>
    </div>
  );
}

export default ProductCard;
