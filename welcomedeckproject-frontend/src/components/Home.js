import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <div className='homeBox'>
      <h2 className='homeTitle'>Welcome New Joinees!</h2>
      <p className='homeP'>Please enter your details by clicking the link below </p>
      <a className='homeA' href='form'>Fill Form</a>
    </div>
  )
}

export default Home