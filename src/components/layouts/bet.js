import * as React from 'react'
import { country } from '../../helpers';

let countDown = []

function formatDate (date) {
  const d = new Date(date)
  let mm = d.getMinutes()
  if( mm < 10 ) mm = '0' + mm; 
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${mm}`
}

function countDate111 (event, serverTime) {
  var diff = Math.floor((new Date(serverTime) - new Date(event.timer.base)) / 1000) // second
  let spent, timeVisible, willFinish, willStart, willFinish1H, willStart2H
  // console.log(event, diff, serverTime)
  if (event.period === 'Not Started') {
    spent = 0
    timeVisible = false
    willFinish = 105 * 60
    willStart = diff < 0? -diff : 10 * 60
    willFinish1H = 50 * 60
    willStart2H = willFinish1H + 15 * 60
  } else if (event.period === '1H') {
    spent = diff
    timeVisible = true
    willFinish = 105 * 60
    willStart = null
    willFinish1H = 50 * 60
    willStart2H = willFinish1H + 15 * 60
  } else if (event.period === '2H') {
    spent = diff - (15 * 60)
    timeVisible = true
    willFinish = event.timer.seconds? event.timer.seconds + (50 * 60) : 105 * 60
    willStart = null
    willFinish1H = null
    willStart2H = null
  } else if (event.period === 'Halftime') {
    spent = event.timer.seconds? event.timer.seconds : diff
    timeVisible = false
    willFinish = event.timer.seconds? event.timer.seconds + (50 * 60) : 105 * 60
    willStart = null
    willFinish1H = null
    willStart2H = event.timer.seconds? 15 * 60 + event.timer.seconds : 65 * 60
  }
  // interval
  if (!countDown.includes(event.id)) {
    countDown[event.id] = setInterval(() => {
      if ((timeVisible || willStart === 0 || willStart2H === 0) && willFinish) {
        if (document.getElementById('count' + event.id)) document.getElementById('count' + event.id).innerHTML = `${Math.floor(spent / 60)}:${spent % 60 > 9? spent % 60 : '0' + spent % 60}`
        spent++
      } else {
        if (document.getElementById('count' + event.id)) document.getElementById('count' + event.id).innerHTML = ''
        if (willFinish === 0) {
          clearInterval(countDown[event.id])
          if (document.getElementById('period' + event.id)) document.getElementById('period' + event.id).innerHTML = 'Finished'
        }
        if (willFinish1H === 0) {
          if (document.getElementById('period' + event.id)) document.getElementById('period' + event.id).innerHTML = '2H'
        }
      }
      if (willStart) willStart--
      if (spent && willFinish1H) willFinish1H--
      if (spent && willFinish) willFinish--
      if (spent && willStart2H) willStart2H--
    }, 1000)
  }
}

function countDate (event, serverTime) {
  var diff = event.period === '2H'? Math.floor((new Date(serverTime) - new Date(event.timer.base)) / 1000) - (15 * 60) : Math.floor((new Date(serverTime) - new Date(event.timer.base)) / 1000)
  if (diff > 0 && !countDown.includes(event.id)) {
    countDown.push(event.id)
    setInterval(() => {	
      const target = document.getElementById('count' + event.id)
      if (target) target.innerHTML = `${Math.floor(diff / 60)}:${diff % 60 > 9? diff % 60 : '0' + diff % 60}`
      diff++
    }, 1000)
  }
}

const BetTable = ({ betPice }) => {
  const { event, target, id, tdata, postEvent, index } = betPice

  const openTab = (id) => {
    const targets = document.getElementsByClassName('table-box1-containerTab')
    for (var i = 0; i < targets.length; i++) {
      targets[i].style.display = 'none'
    }
    if ( document.getElementById(id) ) document.getElementById(id).style.display = 'block'
    if ( document.getElementsByClassName('lay_back_active')[0] ) document.getElementsByClassName('lay_back_active')[0].classList.remove("lay_back_active")
    if ( document.getElementById('b' + id) ) document.getElementById('b' + id).classList.add("lay_back_active")
  }
  const closeTab = (id) => {
    if ( document.getElementById(id) ) document.getElementById(id).style.display = 'none'
  }
  const decrease = (e) => {
    if ( e.target.nextElementSibling.value > 0 ) e.target.nextElementSibling.value = e.target.nextElementSibling.value - 1
  }
  const increase = (e) => {
    e.target.previousElementSibling.value = e.target.previousElementSibling.value * 1 + 1
  }
  const stakeDecrease = (e) => {
    if ( e.target.nextElementSibling.value > 0 ) e.target.nextElementSibling.value = (e.target.nextElementSibling.value - 0.02).toFixed(2)
  }
  const stakeIncrease = (e) => {
    e.target.previousElementSibling.value = (e.target.previousElementSibling.value * 1 + 0.02).toFixed(2)
  }

  const submitBet = async (side, id, id2) => {
    const eID = document.getElementById(id)
    const eID2 = document.getElementById(id2)
    if (!eID.value || isNaN(eID.value) || parseFloat(eID.value) <= 0) return
    if (!eID2.value || isNaN(eID2.value) || parseFloat(eID2.value) <= 0) return
    postEvent({selection: target, side, odds: parseFloat(eID.value), stake: parseFloat(eID2.value), slug: event.slug})
    // eID.value = 0
    eID2.value = 0
  }

  return (
    <>
      <table className="table table1 home-table">
        <tbody>
          <tr>
            <td className="table1-td1">
              {['Home', 'Away'].includes(target) ? event[target.toLowerCase()] : target} &nbsp;&nbsp;&nbsp;
              {['Home', 'Away'].includes(target) && event.live_score? event.live_score.split(':')[['Home', 'Away'].indexOf(target)] : ''}
            </td>
            <td className="table1-td2">
              <button className="tab-btn1 table-box1-column lay_back_btn" id={'bf'+id} onClick={() => openTab('f'+id)}>
                <p>{event.market_results[index] && event.market_results[index].odds? event.market_results[index].odds : 0}</p>
                <p>€ 0</p>
              </button>
              <button className="tab-btn1 table-box2-column lay_back_btn" id={'bt'+id} onClick={() => openTab('t'+id)}>
                <p>{event.market_results[index] && event.market_results[index].odds? event.market_results[index].odds : 0}</p>
                <p>€ 0</p>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id={'f'+id} className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
        <div className="bet1-number table-box1-div1">
          <h1> Back ( { event[target]? event[target] : 'X' } )</h1>
          <span className="minus" onClick={stakeDecrease}>-</span>
          <input type="number" min="0" id={'stake-back'+id} step="0.02" defaultValue={event.market_results[index] && event.market_results[index].odds? event.market_results[index].odds : 0} />
          <span className="plus" onClick={stakeIncrease}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={decrease}>-</span>
          <input type="number" className="mynumber" min="0" id={'stake-back-profit'+id}/>
          <span className="plus" onClick={increase}>+</span>
        </div>
        <button onClick={() => closeTab('f'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <button className="place-btn" onClick={() => submitBet('Back', 'stake-back'+id, 'stake-back-profit'+id)}>Place Bet</button>
      </div>
      <div id={'t'+id} className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
        <div className="bet1-number table-box1-div1">
          <h1> Lay ( { event[target]? event[target] : 'X' } )</h1>
          <span className="minus" onClick={stakeDecrease}>-</span>
          <input type="number" min="0" id={'stake-lay'+id} step="0.02" defaultValue={event.market_results[index] && event.market_results[index].odds? event.market_results[index].odds : 0}/>
          <span className="plus" onClick={stakeIncrease}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={decrease}>-</span>
          <input type="number" className="mynumber" min="0" id={'stake-lay-profit'+id}/>
          <span className="plus" onClick={increase}>+</span>
        </div>
        <button onClick={() => closeTab('t'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <button className="place-btn" onClick={() => submitBet('Lay', 'stake-lay'+id, 'stake-lay-profit'+id)}>Place Bet</button>
      </div>
    </>
  )
}

export const BetSection = ({ betData, id, postEvent }) => {

  // console.log(betData)

  return (
    <div className="bet-sec1-lay-back-div">
      <div className="bet-sec1-green-div">
        <table className="bet-sec1-lay-back-table">
          <tbody>
            <tr>
              <td className="bet-sec1-league-td">
                <a href="/bet-detail">
                  <h1>{betData.league}</h1>
                </a>
              </td>
              <td className="bet-sec1-lay-td">
                <h1>Back</h1>
              </td>
              <td className="bet-sec1-back-td">
                <h1>Lay</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {betData.events.map((event, idex) => <div key={event.id}>
        <div className="bet-sec1-light-green-div">
          <a href="/bet-detail">
          <h5>{event.title} &nbsp;&nbsp;&nbsp;{event.live_score && `(${event.live_score})`}</h5>
          </a>
          <h6>
            <span id={'count' + event.id}>
              {(event.period !== 'Finished' && event.period !== 'Half Time' && event.period !== 'Not Started' && event.timer && event.timer.base)? countDate(event, betData.serTime): ''}
            </span> &nbsp;&nbsp;&nbsp; 
            <span className="period" id={'period' + event.id}>{event.period && `${event.period}`}</span>
          </h6>
        </div>
        {
          event.sport_name === 'Football'? ["Home", "Draw", "Away"].map((tdata, index) => <BetTable key={index}
            betPice={{
              postEvent,
              event,
              index,
              target: ["Home", "Draw", "Away"][index],
              id: idex+''+id+''+index, tdata
            }} />)
          : ["Home", "Away"].map((tdata, index) => <BetTable key={index}
            betPice={{
              postEvent,
              event,
              index,
              target: ["Home", "Away"][index], 
              id: idex+''+id+''+index, tdata
            }} />)
        }
      </div>)}
    </div>
  )
}