import * as React from 'react'
import axios from 'axios'
import { apis } from '../../helpers'

function formatDate (date) {
  const d = new Date(date)
  let mm = d.getMinutes()
  if( mm < 10 ) mm = '0' + mm; 
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${mm}`
}

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_SERVER : process.env.REACT_APP_DEV_SERVER;

const BetTable = ({ betPice }) => {
  const { event, target, id, tdata, postEvent } = betPice
  console.log('tdata', event)

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
    if (!document.getElementById(id).value || isNaN(document.getElementById(id).value) || parseFloat(document.getElementById(id).value) <= 0) return
    if (!document.getElementById(id2).value || isNaN(document.getElementById(id2).value) || parseFloat(document.getElementById(id2).value) <= 0) return
    postEvent({selection: target, side, odds: parseFloat(document.getElementById(id).value), stake: parseFloat(document.getElementById(id2).value), slug: event.slug})
    document.getElementById(id).value = 0
    document.getElementById(id2).value = 0
  }

  return (
    tdata.visibility === "Visible" && <>
      <table className="table table1 home-table">
        <tbody>
          <tr>
            <td className="table1-td1">{target}</td>
            <td className="table1-td2">
              <button className="tab-btn1 table-box1-column lay_back_btn" id={'bf'+id} onClick={() => openTab('f'+id)}>
                <p>{tdata.odds}</p>
                <p>€ 0</p>
              </button>
              <button className="tab-btn1 table-box2-column lay_back_btn" id={'bt'+id} onClick={() => openTab('t'+id)}>
                <p>{tdata.odds}</p>
                <p>€ 0</p>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id={'f'+id} className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
        <div className="bet1-number table-box1-div1">
          <h1> Back ( {tdata.name.value} )</h1>
          <span className="minus" onClick={stakeDecrease}>-</span>
          <input type="number" min="0" id={'stake-back'+id} step="0.02" defaultValue={tdata.odds} />
          <span className="plus" onClick={stakeIncrease}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={decrease}>-</span>
          <input type="number" className="mynumber" min="0" id={'stake-back-profit'+id}/>
          <span className="plus" onClick={increase}>+</span>
        </div>
        <button onClick={() => closeTab('f'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <button className="place-btn" onClick={() => submitBet('back', 'stake-back'+id, 'stake-back-profit'+id)}>Place Bet</button>
      </div>
      <div id={'t'+id} className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
        <div className="bet1-number table-box1-div1">
          <h1> Lay ( {tdata.name.value} )</h1>
          <span className="minus" onClick={stakeDecrease}>-</span>
          <input type="number" min="0" id={'stake-lay'+id} step="0.02" defaultValue={tdata.odds}/>
          <span className="plus" onClick={stakeIncrease}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={decrease}>-</span>
          <input type="number" className="mynumber" min="0" id={'stake-lay-profit'+id}/>
          <span className="plus" onClick={increase}>+</span>
        </div>
        <button onClick={() => closeTab('t'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <button className="place-btn" onClick={() => submitBet('lay', 'stake-lay'+id, 'stake-lay-profit'+id)}>Place Bet</button>
      </div>
    </>
  )
}

export const BetSection = ({ betData, id, postEvent }) => {

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
            <h5>{event.title}</h5>
          </a>
          <h6>{formatDate(event.date)}</h6>
        </div>
        {
          event.market_results.map((tdata, index) => 
            <BetTable key={index}
              betPice={{
                postEvent,
                event, 
                target: event.market_results.length>2? ["home", "draw", "away", "upcoming"][index]:["home", "away"][index], 
                id: idex+''+id+''+index, tdata
              }} />)
        }
      </div>)}
    </div>
  )
}