import * as React from 'react'

function formatDate (date) {
  const d = new Date(date)
  let mm = d.getMinutes()
  if(mm<10) mm='0'+mm; 
  return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${mm}`
}

const BetTable = ({ data, id, target, eventId }) => {
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

  return (
    data.visibility === "Visible" && <>
      <table className="table table1 home-table">
        <tbody>
          <tr>
            <td className="table1-td1">{target === 0? "Home": target === 1? "Away": target === 2? "Draw":"Upcoming"}</td>
            <td className="table1-td2">
              <button className="tab-btn1 table-box1-column lay_back_btn" id={'bf'+id} onClick={() => openTab('f'+id)}>
                <p>{data.odds}</p>
                <p>€ 0</p>
              </button>
              <button className="tab-btn1 table-box2-column lay_back_btn" id={'bt'+id} onClick={() => openTab('t'+id)}>
                <p>{data.odds}</p>
                <p>€ 0</p>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id={'f'+id} className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
        <div className="bet1-number table-box1-div1">
          <h1> Back {data.name.value}</h1>
          <span className="minus" onClick={(e) => decrease(e)}>-</span>
          <input type="number" min="0" />
          <span className="plus" onClick={(e) => increase(e)}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={(e) => decrease(e)}>-</span>
          <input type="number" className="mynumber" min="0" />
          <span className="plus" onClick={(e) => increase(e)}>+</span>
        </div>
        <button onClick={() => closeTab('f'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <a href="/bet">
          <button className="place-btn">Place Bet</button>
        </a>
      </div>
      <div id={'t'+id} className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
        <div className="bet1-number table-box1-div1">
          <h1> Lay {data.name.value}</h1>
          <span className="minus" onClick={(e) => decrease(e)}>-</span>
          <input type="number" min="0" />
          <span className="plus" onClick={(e) => increase(e)}>+</span>
        </div>
        <div className="bet1-number table-box1-div2">
          <span className="minus" onClick={(e) => decrease(e)}>-</span>
          <input type="number" className="mynumber" min="0" />
          <span className="plus" onClick={(e) => increase(e)}>+</span>
        </div>
        <button onClick={() => closeTab('t'+id)} className="cancel-btn table-box1-closebtn">Cancel</button>
        <a href="/bet"><button className="place-btn">Place Bet</button></a>
      </div>
    </>
  )
}

export const BetSection = ({ betData, id }) => {

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
          event.market_results.map((tdata, index) => <BetTable key={index} data={tdata} id={idex+''+id+''+index} eventId={event.id} target={index} />)
        }
      </div>)}
    </div>
  )
}