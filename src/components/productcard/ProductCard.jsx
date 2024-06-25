import React from "react";

function ProductCard() {
  const categories = [
    {
      name: "JEANS",
      icon: "https://5.imimg.com/data5/CB/XM/MY-62959177/denim-shorts-man.jpg",
    },
    { name: "DRESSES", icon: "/path/to/dresses-icon.png" },
    { name: "SHIRTS", icon: "/.0/to/shirts-icon.png" },
    { name: "TOPS", icon: "/path/to/tops-icon.png" },
  ];

  return (
    <div className="w-full">
      {/* Category Bar */}
      <div className="bg-yellow-500 py-4">
        <div className="container mx-auto flex justify-around items-center ">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img
                src={category.icon}
                alt={category.name}
                className="w-8 h-8 mb-2 hidden md:block rounded-full"
              />
              <span className="text-white text-sm md:text-base">
                {category.name} 
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Card Content */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <h2 className="text-xl font-bold mb-2">Product Title</h2>
        <p className="text-gray-600">Product description goes here...</p>
        {/* Add more product details as needed */}
      </div>
    </div>
  );
}

export default ProductCard;
