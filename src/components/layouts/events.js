import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { BetSection } from './bet'

export const Events = (props) => {
  let location = useLocation()
  const currentPath = location.pathname

  const {userData, updateUserData, eventData} = props
  const [sport, setSport] = useState('Football')
  const dispalyEventData = eventData.map(evt => {
    let availableEvents = evt.events.filter(event => event.sport_name === sport && event.market_results.length && (currentPath === '/future' && event.match_result === 'Upcoming' || currentPath !== '/future'))
    return availableEvents.length? {...evt, events: availableEvents} : null
  }).filter(evt => evt)

  return (
    <>
      <div className="bet-sec1-div1-football-basketball-tennis-div">
        <button className={`bet-sec1-div1-football ${sport === 'Football' && 'active'}`} onClick={() => setSport('Football')}>Football</button>
        <button className={`bet-sec1-div1-basketball ${sport === 'Basketball' && 'active'}`} onClick={() => setSport('Basketball')}>Basketball</button>
        <button className={`bet-sec1-div1-tennis ${sport === 'Tennis' && 'active'}`} onClick={() => setSport('Tennis')}>Tennis</button>
      </div>
      <div id="lay_back_myDIV">
        {
          dispalyEventData.length
            ? dispalyEventData.map((betd, index) => <BetSection betData={betd} key={index} id={index} {...props} />)
            : <p style={{textAlign: 'center'}}>No Events</p>
        }
      </div>
    </>
  )
}