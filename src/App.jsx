//import React from 'react'
import Navbar from './componenet/Navbar/Navbar'
import Hero from './componenet/Hero/Hero'
import About from './componenet/About/About'
import Service from './componenet/Services/Service'
import MyWork from './componenet/MyWork/MyWork'
import Contact from './componenet/Contact/Contact'
import Footer from './componenet/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App