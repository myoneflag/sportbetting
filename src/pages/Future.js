import React from 'react'
import { CarouselSection } from '../components/layouts/carousel'
// import { bet } from '../helpers'
// import { BetSection } from '../components/layouts/bet'
import { BetSlip } from '../components/layouts/betslip'
import { Events } from '../components/layouts/events'
// import { Detail } from '../components/layouts/detail'

export const Future = (props) => {

  return (
    <section id="bet-sec1">
      <div className="container-fluid">
        <div className="row bet-sec1-row1">
          <div className="col-sm-2 bet-sec1-row1-div1">
            <a href="/future/league">League</a>
            <a href="/future/sport">Sports</a>
          </div>
          <div className="col-sm-7 bet-sec1-row1-div2">
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