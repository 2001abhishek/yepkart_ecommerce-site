// src/pages/Men.jsx
import React from 'react';
import Layout from '../../components/layout/Layout';

const products = [
  {
    name: 'Oversized Hoodie for Men',
    image: 'https://shop.hardtunedstore.com/cdn/shop/products/black-bunny-hoodie-495985_2000x.jpg?v=1709048835', // replace with actual image paths
    originalPrice: '5,000',
    discountedPrice: '2,500',
  },
  {
    name: 'Relaxed Fit Hoodiehb',
    image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2F0b%2Fcc0b4f919954f890ecf806d870bcd63380588c86.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', // replace with actual image paths
    originalPrice: '5,000',
    discountedPrice: '2,500',
  },
  {
    name: 'Relaxed Fit Hoodie for Men',
    image: 'https://img1.theiconic.com.au/HJm2Uzd3L0kHhVHCoKsCBbYt-Wc=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpolo-ralph-lauren-7822-0987602-1.jpg', // replace with actual image paths
    originalPrice: '5,000',
    discountedPrice: '2,500',
  },
  {
    name: 'Relaxed Fit Hoodie for Men',
    image: '/images/hoodie3.png', // replace with actual image paths
    originalPrice: '5,000',
    discountedPrice: '2,500',
  },
  {
    name: 'Relaxed Fit Hoodie for Men',
    image: '/images/hoodie3.png', // replace with actual image paths
    originalPrice: '5,000',
    discountedPrice: '2,500',
  },
  {
    name: 'Relaxed Fit Hoodie for Men',
    image: '/images/hoodie3.png', // replace with actual image paths
    originalPrice: '5,000',
    discountedPrice: '2,500',
  },
];

const Men = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Oversized Hoodie For Men</h2>
        <p className="text-lg text-center mb-6">All Size Men's Collection</p>
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
    </Layout>
  );
};

export default Men;
