import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
      <Navbar></Navbar>
      {/* <div className='min-h-screen'></div> */}
      <Course></Course>
      <Footer></Footer>
    </>
  )
}

export default Courses
