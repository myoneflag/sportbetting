import React, { useState, useEffect } from 'react'
import { BetSection } from './bet'
import { apis } from '../../helpers'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

export const Events = (props) => {

  const { currentPath, apiUrl } = props
  const [sport, setSport] = useState('Football')
  const [eventData, setEventData] = useState([])
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    getEvent()
  }, [])

  const getEvent = async () => {
    await axios.get(currentPath === '/'? apiUrl + apis.getEvents + '?live=true' : apiUrl + apis.getEvents + '?live=false')
      .then((res) => {
        setTimeout(() => {getEvent()}, 600000)
        if (res.statusText === "OK") {
          setEventData([...new Set(res.data.map(e => e.league))].map(league => {
            let tempEvents = res.data.filter(event => event.league === league)
            tempEvents.map((event, index) => {
              // console.log(event.match_result)
              let readtEvent = []
              try {
                if (Array.isArray(event.market_results)) readtEvent = [...event.market_results]
                else if (Array.isArray(JSON.parse(event.market_results.replace(/\'/g, '"')))) readtEvent = [...JSON.parse(event.market_results.replace(/\'/g, '"'))]
              } catch (err) {
                // console.log(event)
                // console.log(err)
              }
              tempEvents[index].market_results = [...readtEvent]
            })
            return {league, events: tempEvents, serTime: res.headers["x-server-time"]}
          }))
        }
      })
      .catch((err) => {
        getEvent()
        console.log('info', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get events info':'Error establishing a connection'})
      })

  }

  // console.log('Event Data => ', eventData)
  const dispalyEventData = eventData.map(evt => {
    let availableEvents = evt.events.filter(event => event.sport_name === sport)
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
            : <p style={{textAlign: 'center'}}>No Game</p>
        }
      </div>
      {alert && <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={alert.msg && alert.type ? true : false} autoHideDuration={6000} onClose={() => setAlert(null)}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setAlert(null)} severity={alert.type}>
          {alert.msg}
        </MuiAlert>
      </Snackbar>}
    </>
  )
}