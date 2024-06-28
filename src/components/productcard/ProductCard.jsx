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

  return (
    <div className="w-full">
      {/* Category Bar */}
      <div className="bg-yellow-500 py-4">
  <div className="container mx-auto flex flex-wrap justify-center items-center space-x-72">
    {categories.map((category, index) => (
      <div key={index} className="cursor-pointer flex flex-col items-center m-4">
        <img
          src={category.icon}
          alt={category.name}
          className="w-20 h-20 mb-2 hidden md:block rounded-full"
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
