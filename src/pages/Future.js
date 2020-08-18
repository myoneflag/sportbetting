import React, { useState } from 'react'
import { CarouselSection } from '../components/layouts/carousel'
import { bet } from '../helpers'
import { BetSection } from '../components/layouts/bet'
import { BetSlip } from '../components/layouts/betslip'
import { Detail } from '../components/layouts/detail'

export const Future = (props) => {
  const {userData, updateUserData} = props
  const [detail, setDetail] = useState(null)

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
            {detail? <Detail detail={detail} /> : <>
              <div className="bet-sec1-div1-football-basketball-tennis-div">
                <button className="bet-sec1-div1-football" onClick={() => setDetail('football')}>Football</button>
                <button className="bet-sec1-div1-basketball" onClick={() => setDetail('basketball')}>Basketball</button>
                <button className="bet-sec1-div1-tennis" onClick={() => setDetail('tennis')}>Tennis</button>
              </div>
              <div id="lay_back_myDIV">
                {
                  bet.map((betd, index) => <BetSection betData={betd} key={index} id={index} />)
                }
              </div>
            </>}
          </div>
          <div className="col-sm-3 bet-sec1-row1-div3">
            <BetSlip />
          </div>
        </div>
      </div>
    </section>
  )
}