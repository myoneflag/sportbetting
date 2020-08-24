import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CarouselSection } from '../components/layouts/carousel'
import { bet } from '../helpers'
import { BetSection } from '../components/layouts/bet'
import { BetSlip } from '../components/layouts/betslip'
import { Detail } from '../components/layouts/detail'

export const Home = (props) => {
  const {userData, updateUserData, eventData, handleChangedSport} = props
  console.log(eventData)
  const liveEventData = [...eventData.map(item => {
    return {...item, ...{events: item.events.filter(e => {
      if (new Date() > new Date(e.created) && new Date() < new Date(e.date)) return true
      else return false
    })}}
  }).filter(data => data.events.length)]
  let location = useLocation()
  const sport = location.search.replace('?sport=', '')

  return (
    <section id="bet-sec1">
      <div className="container-fluid">
        <div className="row bet-sec1-row1">
          <div className="col-sm-9 bet-sec1-row1-div2">
            <CarouselSection />
            {/* detail? <Detail detail={detail} /> :  */}
            {<>
              <div className="bet-sec1-div1-football-basketball-tennis-div">
                <button className={`bet-sec1-div1-football ${(!sport || sport === 'Football') && 'active'}`} onClick={() => handleChangedSport('Football')}>Football</button>
                <button className={`bet-sec1-div1-basketball ${sport === 'Basketball' && 'active'}`} onClick={() => handleChangedSport('Basketball')}>Basketball</button>
                <button className={`bet-sec1-div1-tennis ${sport === 'Tennis' && 'active'}`} onClick={() => handleChangedSport('Tennis')}>Tennis</button>
              </div>
              <div id="lay_back_myDIV">
                {
                  liveEventData && liveEventData.map((betd, index) => <BetSection betData={betd} key={index} id={index} {...props} />)
                }
              </div>
            </>}
          </div>
          <div className="col-sm-3 bet-sec1-row1-div3">
            <BetSlip {...props} />
          </div>
        </div>
      </div>
    </section>
  )
}