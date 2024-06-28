import React from 'react'
import Layout from '../../components/layout/Layout'

function Blog() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 justify-center">
          <div className="lg:col-span-5 flex flex-col justify-between p-4 md:pl-10 pt-10">
            <div className='bg-gray-100 pb-10'>
              <img src="./src/pages/blog/one.png" alt="" className='mb-4 w-full'/>
              <div className="pl-4 md:pl-10">
                <span className='block md:text-3xl text-xl bg-gray w-full'>MEN'S WEAR WITH NEW AND TRENDING DESIGNS.</span>
                <button className='text-white bg-black p-3 px-6 mt-4 md:mt-10 md:ml-[750px] text-lg'>
                  FLAT 30% OFF
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 gap-4 justify-center pt-10 px-4 md:px-10">
            <div className='bg-gray-100 mb-[55px]'>
              <img src="./src/pages/blog/two.png" alt="" className='mb-4 w-full'/>
              <span className='text-2xl font-semi-bold p-4 block'>CASUAL SHIRTS</span>
              <div className="flex justify-between p-4">
                <button className='bg-black text-white p-3'>20%</button>
                <button className='bg-black text-white pl-5 pr-5 pt-1 pb-1 text-xl'>BUY</button>
              </div>
            </div>
            <div className='bg-gray-100 mb-12'>
              <img src="./src/pages/blog/three.png" alt="" className='mb-4 w-full' />
              <span className='text-2xl font-semi-bold p-4 block'>CASUAL T-SHIRTS</span>
              <div className="flex justify-between p-4">
                <button className='bg-black text-white p-3'>20%</button>
                <button className='bg-black text-white pl-5 pr-5 pt-1 pb-1 text-xl'>BUY</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 justify-center">
          <div className="lg:col-span-2 grid grid-cols-1 gap-4 justify-center pt-10 px-4 md:px-10">
            <div className='bg-gray-100 mb-[55px]'>
              <img src="./src/pages/blog/four.png" alt="" className='mb-4 w-full'/>
              <span className='text-2xl font-semi-bold p-4 block'>CASUAL WEARS</span>
              <div className="flex justify-between p-4">
                <button className='bg-black text-white p-3'>20%</button>
                <button className='bg-black text-white pl-5 pr-5 pt-1 pb-1 text-xl'>BUY</button>
              </div>
            </div>
            <div className='bg-gray-100 mb-12'>
              <img src="./src/pages/blog/five.png" alt="" className='mb-4 w-full' />
              <span className='text-2xl font-semi-bold p-4 block'>FOR SPECIAL EVENTS</span>
              <div className="flex justify-between p-4">
                <button className='bg-black text-white p-3'>25%</button>
                <button className='bg-black text-white pl-5 pr-5 pt-1 pb-1 text-xl'>BUY</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-4 md:pl-20 pt-10">
            <div className='bg-gray-100 mb-60 h-full'>
              <img src="./src/pages/blog/six.png" alt="" className='mb-4 w-full h-96 object-cover'/>
              <div className="flex flex-col items-start pl-4 md:pl-10">
                <span className='md:text-3xl text-xl bg-gray w-full pt-20'>MEN'S WEAR WITH NEW AND TRENDING DESIGNS.</span>
                <button className='text-white bg-black p-3 px-6 mt-4 md:mt-10 text-lg'>
                  FLAT 30% OFF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
