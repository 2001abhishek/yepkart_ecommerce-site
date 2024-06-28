import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import ProductCard from '../../components/productcard/ProductCard'
function Home() {
  return (
    <Layout>
      <HeroSection/>
      <ProductCard/>
    </Layout>
  )
}

export default Home