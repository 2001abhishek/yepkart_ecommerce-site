import React from 'react'
import Layout from "../../components/layout/Layout";


const products = [
  {
    name: 'Solid Stylish Hooded Sweatshirts',
    image: 'https://www.psychologs.com/wp-content/uploads/2024/04/the-hoodie-culture-fighting-insecurities-and-vulnerabilities-one-hoodie-at-a-time.jpg', // replace with actual image paths
    originalPrice: '2,600',
    discountedPrice: '1,300',
  },
  {
    name: 'Midnight Blue Three-Tier Dress',
    image: 'https://img.freepik.com/free-photo/beautiful-brunette-woman-evening-dress-posing_176420-3748.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711843200&semt=ais', // replace with actual image paths
    originalPrice: '2,500',
    discountedPrice: '1,250',
  },
  {
    name: 'Polka Dots Design, Button Stylish Casual Dresses',
    image: 'https://arwensboutique.com/cdn/shop/files/Arwerns_Dresses_category.png?v=1696445781&width=360', // replace with actual image paths
    originalPrice: '3,000',
    discountedPrice: '1,500',
  },
];

const products1 = [
  {
    name: 'Purple Seof-Design Dress',
    image: 'https://abdu.webappsimple.com/uploads/product/1688269902beautiful-fashion-woman-purple-long-dress-hairstyle-with-pigtails-design-poses-studio-removebg-preview.png', // replace with actual image paths
    originalPrice: '2,800',
    discountedPrice: '1,400',
  },
  {
    name: 'Slim Fit Track Suit',
    image: 'https://img.freepik.com/free-photo/picture-pretty-caucasian-female-purple-sport-suit-black-trainers-keeps-her-hands-pockets_132075-5878.jpg', // replace with actual image paths
    originalPrice: '2,200',
    discountedPrice: '1,100',
  },
  {
    name: 'Solid Stylish Skinny Fit New Trend Denim Jeans',
    image: 'https://feeds.abplive.com/onecms/images/uploaded-images/2024/02/17/2dd790df45c5b6d4d7d67ed00d38adc61708168849784903_9.jpg', // replace with actual image paths
    originalPrice: '2,400',
    discountedPrice: '1,200',
  },
];

const products2 = [
  {
    name: 'Floral Design Casual Top',
    image: 'https://img.freepik.com/free-psd/medium-shot-young-woman-posing-studio_23-2150767233.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=ais', // replace with actual image paths
    originalPrice: '2,200',
    discountedPrice: '1,000',
  },
  {
    name: 'Floral Design Stylish Casual Dresses',
    image: 'https://img.freepik.com/free-photo/beautiful-girl-street_1157-4709.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais', // replace with actual image paths
    originalPrice: '2,200',
    discountedPrice: '1,100',
  },
  {
    name: 'Graphic Design Stylish Casual Shirts',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleUkebRxmdT51HoTE9jFfduq0cj24E8SwD7hx5lGsewuLg6NvE5ALn3CaMnp2fXHaiCU&usqp=CAU', // replace with actual image paths
    originalPrice: '2,600',
    discountedPrice: '1,300',
  },
];


const Women = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    className="w-full h-96 object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold rounded-full px-2 py-1">
                    50%
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 line-through">
                      Rs. {product.originalPrice}
                    </span>
                    <span className="text-gray-900 font-bold">
                      Rs. {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-2 text-center">NEW TRENDING'S</h2>
        <p className="text-lg text-center mb-6">All Size Women's Collection</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {products1.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    className="w-full h-96 object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold rounded-full px-2 py-1">
                    50%
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 line-through">
                      Rs. {product.originalPrice}
                    </span>
                    <span className="text-gray-900 font-bold">
                      Rs. {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-2 text-center">CASUAL WEAR'S</h2>
        <p className="text-lg text-center mb-6">All Size Women's Collection</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {products2.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    className="w-full h-96 object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold rounded-full px-2 py-1">
                    50%
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 line-through">
                      Rs. {product.originalPrice}
                    </span>
                    <span className="text-gray-900 font-bold">
                      Rs. {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
};

export default Women
