import * as React from 'react'
import axios from 'axios'
import { apis } from '../../helpers'

function formatDate (date) {
  const d = new Date(date)
  let mm = d.getMinutes()
  if(mm<10) mm='0'+mm; 
  return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${mm}`
}

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_SERVER : process.env.REACT_APP_DEV_SERVER;

const BetTable = ({ betPice }) => {
  const { event, target, id, tdata, postEvent } = betPice

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
  const decrease = (e, id) => {
    if ( e.target.nextElementSibling.value > 0 ) e.target.nextElementSibling.value = e.target.nextElementSibling.value - 1
    document.getElementById(id).value =  ((e.target.nextElementSibling.value - 1) / (tdata.odds - 1)).toFixed(2)
  }
  const increase = (e, id) => {
    e.target.previousElementSibling.value = e.target.previousElementSibling.value * 1 + 1
    document.getElementById(id).value = ((e.target.previousElementSibling.value * 1 + 1) / (tdata.odds - 1)).toFixed(2)
  }
  const stakeDecrease = (e, id) => {
    if ( e.target.nextElementSibling.value > 0 ) e.target.nextElementSibling.value = e.target.nextElementSibling.value - 1
    document.getElementById(id).value = ((tdata.odds - 1) * (e.target.nextElementSibling.value - 1)).toFixed(2)
  }
  const stakeIncrease = (e, id) => {
    e.target.previousElementSibling.value = e.target.previousElementSibling.value * 1 + 1
    document.getElementById(id).value = ((tdata.odds - 1) * (e.target.previousElementSibling.value * 1 + 1)).toFixed(2)
  }

  const submitBet = async (side, id, id2) => {
    if (!document.getElementById(id).value || isNaN(document.getElementById(id).value) || parseFloat(document.getElementById(id).value) <= 0) return
    postEvent({selection: target, side, odds: tdata.odds, stake: parseFloat(document.getElementById(id).value)})
    document.getElementById(id).value = 0
    document.getElementById(id2).value = 0
  }

  const handleChangeStake = (e, id) => {
    if (e.target.value && !isNaN(e.target.value)) document.getElementById(id).value = ((tdata.odds - 1) * parseFloat(e.target.value)).toFixed(2)
    else document.getElementById(id).value = 0
  }

  const handleChangeProfit = (e, id) => {
    if (e.target.value && !isNaN(e.target.value)) document.getElementById(id).value = (parseFloat(e.target.value) / (tdata.odds - 1)).toFixed(2)
    else document.getElementById(id).value = 0
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
          <span className="minus" onClick={(e) => stakeDecrease(e, 'stake-back-profit'+id)}>-</span>
          <input type="number" min="0" id={'stake-back'+id} onChange={(e) => handleChangeStake(e, 'stake-back-profit'+id)}/>
          <span className="plus" onClick={(e) => stakeIncrease(e, 'stake-back-profit'+id)}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={(e) => decrease(e, 'stake-back'+id)}>-</span>
          <input type="number" className="mynumber" min="0" id={'stake-back-profit'+id} onChange={(e) => handleChangeProfit(e, 'stake-back'+id)}/>
          <span className="plus" onClick={(e) => increase(e, 'stake-back'+id)}>+</span>
        </div>
        <button onClick={() => closeTab('f'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <button className="place-btn" onClick={() => submitBet('back', 'stake-back'+id, 'stake-back-profit'+id)}>Place Bet</button>
      </div>
      <div id={'t'+id} className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
        <div className="bet1-number table-box1-div1">
          <h1> Lay ( {tdata.name.value} )</h1>
          <span className="minus" onClick={(e) => stakeDecrease(e, 'stake-lay-profit'+id)}>-</span>
          <input type="number" min="0" id={'stake-lay'+id} onChange={(e) => handleChangeStake(e, 'stake-lay-profit'+id)}/>
          <span className="plus" onClick={(e) => stakeIncrease(e, 'stake-lay-profit'+id)}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={(e) => decrease(e, 'stake-lay'+id)}>-</span>
          <input type="number" className="mynumber" min="0" id={'stake-lay-profit'+id} onChange={(e) => handleChangeProfit(e, 'stake-lay'+id)}/>
          <span className="plus" onClick={(e) => increase(e, 'stake-lay'+id)}>+</span>
        </div>
        <button onClick={() => closeTab('t'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <button className="place-btn" onClick={() => submitBet('lay', 'stake-lay'+id, 'stake-lay-profit'+id)}>Place Bet</button>
      </div>
    </>
  )
}

export const BetSection = ({ betData, id, getBetDataOnly }) => {

  const postEvent = (data) => {
    if (localStorage.getItem('refresh')) {
      axios.post(apiUrl + apis.tokenrefresh, {
        "refresh": localStorage.getItem('refresh')
      })
        .then((res) => {
          if (res.data) {
            localStorage.setItem('access', res.data.access)
            const config = {
              headers: {
                Authorization: "Bearer " + localStorage.getItem('access')
              }
            }
            axios.post(apiUrl + apis.postEvent.replace('{slug}', 'sport-boys-association-sporting-cristal'), {...data}, config)
              .then((res) => {
                if (res.data) {
                  console.log(res.data)
                  // setAlert({type: 'success', msg: 'Deposit successfully'})
                  getBetDataOnly()
                }
              })
              .catch((err) => {
                console.log('post-event', err.response)
                // setAlert({type: err.response?'warning':'error', msg: err.response? err.response.data.code[0]:'Error establishing a connection'})
              })
          }
        })
        .catch((err) => {
          // setAlert({type: err.response? 'warning':'error', msg: err.response? 'Token expired. Login again':'Error establishing a connection'})
        })
    } else {
      // setAlert({type: 'warning', msg: 'Token expired. Login again'})
    }
  }

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
          event.market_results.map((tdata, index) => <BetTable key={index} betPice={{postEvent, event, target: ["home", "draw", "away", "upcoming"][index], id: idex+''+id+''+index, tdata}} />)
        }
      </div>)}
    </div>
  )
}