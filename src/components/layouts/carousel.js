import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const sport = require('../../assets/img/sport.jpg')
const basketbal = require('../../assets/img/Basketbal.jpg')
const betting = require('../../assets/img/tennis-betting-2018-min-1024x415.jpg')
const tennis = require('../../assets/img/tennis-main.jpg')

export const CarouselSection = () => {
  // const [startPosition, setStartPosition] = useState(0)
  // const updateCarouselPosition = (object) => {
  //   if(object.item.index != startPosition){ setStartPosition(object.item.index); }
  // }
  console.log('carousel loading...')
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <OwlCarousel
        // startPosition={startPosition}
        className="owl-theme carousel-inner"
        items={1}
        loop
        nav
        dotsClass="carousel-indicators"
        dotClass="dot"
        navContainerClass="navs-container"
        navClass={['carousel-control-prev', 'carousel-control-next']}
        autoplayTimeout={2000}
        // onDragged={(object) => updateCarouselPosition(object)}
      >
        <div className="item">
          <img className="d-block w-100" src={sport} alt="First slide" />
        </div>
        <div className="item">
          <img className="d-block w-100" src={basketbal} alt="Second slide" />
        </div>
        <div className="item">
          <img className="d-block w-100" src={betting} alt="Third slide" />
        </div>
        <div className="item">
          <img className="d-block w-100" src={tennis} alt="Third slide" />
        </div>
      </OwlCarousel>
    </div>    
  )
}