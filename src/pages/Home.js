import React, { useEffect, useCallback } from 'react'
// import { useLocation } from 'react-router-dom'
// import { bet } from '../helpers'
// import { BetSection } from '../components/layouts/bet'
import { BetSlip } from '../components/layouts/betslip'
// import { Detail } from '../components/layouts/detail'
import { Events } from '../components/layouts/events'
import { CarouselSection } from '../components/layouts/carousel'

export const Home = (props) => {

  useCallback(() => {
    console.log('props changed')
  }, [props])

  return (
    <section id="bet-sec1">
      <div className="container-fluid">
        <div className="row bet-sec1-row1">
          <div className="col-sm-9 bet-sec1-row1-div2">
            <CarouselSection />
            {/* detail? <Detail detail={detail} /> :  */}
            <Events {...props} />
          </div>
          <div className="col-sm-3 bet-sec1-row1-div3">
            <BetSlip {...props} />
          </div>
        </div>
      </div>
    </section>
  )
}