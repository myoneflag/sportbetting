import React, { useState, useEffect } from 'react'

export const BetSlip = (props) => {
  const {userData, updateUserData, deleteBetDate} = props

  const betslips = userData.bets

  const [value, setValue] = useState('single')
  // const [cupOpen, setCupOpen] = useState(false)
  const [displaySlipbox, setDisplaySlipbox] = useState(true)

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  useEffect(() => {
    if (window.innerWidth < 768) setDisplaySlipbox(false)
  }, [])

  return (
    <div className="bet-sec1-row1-div3-bet-slip-div" id="bet-slip-container-html">
      <div className="bet-sec1-row1-div3-inner-div1" onClick={() => setDisplaySlipbox(!displaySlipbox)}>
        <h1>bet slip</h1>
        <i className={`fa ${displaySlipbox? 'fa-window-minimize':'fa-plus'} close-bet-slip-container`}></i>
      </div>
      {displaySlipbox && <div className="bl-box">
        <div className="bet-sec1-row1-div3-inner-div2">
          <div className="bet-sec1-row1-div3-btn-div" id="BetSlip">
            <span><button className={`bet-sec1-row1-div3-btn1 BetSlip_btn ${value === 'single'?'BetSlip_active':''}`} onClick={() => handleChange('single')}>Single</button></span>
            <span><button className={`bet-sec1-row1-div3-btn2 BetSlip_btn ${value === 'multi'?'BetSlip_active':''}`} onClick={() => handleChange('multi')}>Multi</button></span>
          </div>
          {value === 'single' || value === 'multi'? <>{betslips && betslips.map((betslip, index) => <div className="cup-info-box" key={index}>
            <div className="bet-sec1-row1-div3-Cypriot">
              <h2>{betslip.selection}</h2>
              <i className="fas fa-times remove-cup-box" onClick={() => deleteBetDate(betslip)}></i>
            </div>
            <div className="bet-sec1-row1-div3-omania">
              <h1>{betslip.event.title}</h1>
              <h2 className="bet-sec1-row1-div3-match-result">Match Result <span>{betslip.event.result}</span></h2>
              <h6 className="pick-draw-heading1">Your Pick: <span>{betslip.side} </span></h6>
              <h6 className="pick-draw-heading2">{betslip.stake}</h6>
            </div>
          </div>)}</>:<>
          </>}
          <div id="bestlip_errors" className="error-log"></div>
          <div className="bet-sec1-row1-odds-stake-possible-div">
            <h6 className="bet-sec1-row1-odds-div">Total odds: {betslips? betslips.map(betslip => betslip.odds).reduce((a, b) => a + b, 0) : 0 }  <span> Total bets: {betslips? betslips.length : 0 } </span></h6>
            <div className="bet-sec1-row1-stake-div">
              <h6>Stake: <span><input type="text" placeholder="€ 0" defaultValue={betslips? '€ ' + betslips.map(betslip => betslip.stake).reduce((a, b) => a + b, 0) : '€ 0.0' }/></span></h6>
            </div>
            <h6 className="bet-sec1-row1-winning-div">Possible Winnings: <span> {betslips? '€ ' + betslips.map(betslip => betslip.stake * betslip.odds).reduce((a, b) => a + b, 0) : '€ 0.0' } </span></h6>
          </div>
        </div>
        <a href="/bet" className="#"><button className="bet-slip-place-bet-btn">Place Bet</button></a>
      </div>}
    </div>
  )
}