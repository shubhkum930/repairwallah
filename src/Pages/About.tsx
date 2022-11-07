import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import Header from '../Component/Header'

export default function About() {
  const image = require('../assets/repairing.jpg')
  return (
  <>
  <Header/>
  <div className='about-us'>

    <div className='about-us-content'>
        <div className='heading'> Heading</div>
        <div className='content'> Seihewqqqqqqqqqqqqqqqqqqq iewfehrhkj34hj hhhkfhkjhjdfhkj ewiewhewhkew hiewhkehdkedwk ihdkjkjdskjdsj khadkskkjdskjdkj</div>
    </div>

    <div className='about-us-image'>
        <img src={image} alt="" />
    </div>

  </div>
  </>
  )
}
