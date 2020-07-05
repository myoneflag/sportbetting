import * as React from 'react'

import { FaGrid } from '../components/layouts'
import { FaText } from '../components/input'

const imgLeft = require('../assets/images/img1.png')
const imgRight = require('../assets/images/img2.png')

export const Home = () => {

  return (
    <FaGrid container justify="center" alignItems="center">
      <FaGrid item lg={6} md={6} sm={6} xs={12} px={30} py={30} bg="red" className="h-100 pt-200" relative>
        <FaGrid container direction="column" justify="center" alignItems="flex-start">
          <FaText type="desc" color="yellow" className="left-description">“Come fall in love......</FaText>
          <FaText type="title" color="yellow"><span>Share </span> food</FaText>
          <FaText type="title" color="yellow" className="ml-100"><span>Sell </span> food</FaText>
          <FaText type="title" color="yellow"><span>Serve </span> food</FaText>
          <FaGrid container py={50} />
          <img src={imgLeft} alt="food" className="img-landing" />
        </FaGrid>
      </FaGrid>
      <FaGrid item lg={6} md={6} sm={12} xs={12} px={30} py={30} bg="yellow" className="h-100 pt-200" relative>
        <FaGrid container direction="column" justify="center" alignItems="flex-end">
          <FaText type="desc" color="red" className="right-description">......Swipe and have fun”</FaText>
          <img src={imgRight} alt="food" className="img-landing" />
          <FaGrid container py={50} />
          <FaText type="title" color="red" className="mr-200"><span>Meet </span> the Chef</FaText>
          <FaText type="title" color="red"><span>Learn </span> from the Chef</FaText>
          <FaText type="title" color="red" className="mr-50"><span>Dine </span> with the Chef</FaText>
        </FaGrid>
      </FaGrid>
    </FaGrid>
  )
}