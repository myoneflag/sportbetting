import React, { useState, useEffect } from 'react'

export const BetSlip = () => {

  const [value, setValue] = useState('single')
  const [cupOpen, setCupOpen] = useState(true)
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
          {cupOpen && <div className="cup-info-box">
            <div className="bet-sec1-row1-div3-Cypriot">
              <h2>Cypriot Cup</h2>
              <i className="fas fa-times remove-cup-box" onClick={() => setCupOpen(false)}></i>
            </div>
            <div className="bet-sec1-row1-div3-omania">
              <h1>omonia nikosia- doksa katokopiasa</h1>
              <h2 className="bet-sec1-row1-div3-match-result">Match Result</h2>
              <h6 className="pick-draw-heading1">Your Pick: <span>Draw </span></h6>
              <h6 className="pick-draw-heading2">5.85</h6>
            </div>
          </div>}
          <div id="bestlip_errors" className="error-log"></div>
          {value === 'single'? <div className="bet-sec1-row1-odds-stake-possible-div">
            <h6 className="bet-sec1-row1-odds-div">Total odds: 5.85 Total bets: <span> 1 </span></h6>
            <div className="bet-sec1-row1-stake-div">
              <h6>Stake: <span><input type="text" placeholder="€ 00" /></span></h6>
            </div>
            <h6 className="bet-sec1-row1-winning-div">Possible Winnings: <span> € 00 </span></h6>
          </div> : <div className="bet-sec1-row1-odds-stake-possible-div">
            <h6 className="bet-sec1-row1-odds-div">Total odds: 10.25 Total bets: <span> 4 </span></h6>
            <div className="bet-sec1-row1-stake-div">
              <h6>Stake: <span><input type="text" placeholder="€ 00" /></span></h6>
            </div>
            <h6 className="bet-sec1-row1-winning-div">Possible Winnings: <span> € 00 </span></h6>
          </div>}
        </div>
        <a href="/bet" className="#"><button className="bet-slip-place-bet-btn">Place Bet</button></a>
      </div>}
    </div>
  )
}