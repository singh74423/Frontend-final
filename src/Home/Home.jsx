import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
   <div>
       <Navbar></Navbar>
      <Banner></Banner>
      <Freebook></Freebook>
      <Footer></Footer>
   </div>
   </>
  )
}

export default Home