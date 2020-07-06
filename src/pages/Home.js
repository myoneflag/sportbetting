import * as React from 'react'
import { CarouselSection } from '../components/layouts/carousel'
import { bet } from '../helpers'
import { BetSection } from '../components/layouts/bet'

export const Home = () => {

  return (
    <section id="bet-sec1">
      <div className="container-fluid">
        <div className="row bet-sec1-row1">
          <div className="col-sm-9 bet-sec1-row1-div2">
            <CarouselSection />
            <div className="bet-sec1-div1-football-basketball-tennis-div">
              <button className="bet-sec1-div1-football">Football</button>
              <button className="bet-sec1-div1-basketball">Basketball</button>
              <button className="bet-sec1-div1-tennis">Tennis</button>
            </div>
            <div id="lay_back_myDIV">
              {
                bet.map((betd, index) => <BetSection betData={betd} key={index} id={index} />)
              }
            </div>
          </div>
          <div className="col-sm-3 bet-sec1-row1-div3">
            <div className="bet-sec1-row1-div3-bet-slip-div" id="bet-slip-container-html">
              <div className="bet-sec1-row1-div3-inner-div1">
                <h1>bet slip</h1>
                <i className="fas fa-plus close-bet-slip-container"></i>
              </div>
              <div className="bl-box">
                <div className="bet-sec1-row1-div3-inner-div2">
                  <div className="bet-sec1-row1-div3-btn-div" id="BetSlip">
                    <a><button className="bet-sec1-row1-div3-btn1 BetSlip_btn BetSlip_active">Single</button></a>
                    <a><button className="bet-sec1-row1-div3-btn2 BetSlip_btn">Multi</button></a>
                  </div>
                  <div className="cup-info-box">
                    <div className="bet-sec1-row1-div3-Cypriot">
                      <h2>Cypriot Cup</h2>
                      <i className="fas fa-times remove-cup-box"></i>
                    </div>
                    <div className="bet-sec1-row1-div3-omania">
                      <h1>omonia nikosia- doksa katokopiasa</h1>
                      <h2 className="bet-sec1-row1-div3-match-result">Match Result</h2>
                      <h6 className="pick-draw-heading1">Your Pick: <span>Draw </span></h6>
                      <h6 className="pick-draw-heading2">5.85</h6>
                    </div>
                  </div>
                  <div id="bestlip_errors" className="error-log">
                  </div>
                  <div className="bet-sec1-row1-odds-stake-possible-div">
                    <h6 className="bet-sec1-row1-odds-div">Total odds: 5.85 Total bets: <span> 1 </span></h6>
                    <div className="bet-sec1-row1-stake-div">
                      <h6>Stake: <span><input type="text" placeholder="€ 00" /></span></h6>
                    </div>
                    <h6 className="bet-sec1-row1-winning-div">Possible Winnings: <span> € 00 </span></h6>
                  </div>
                </div>
                <a className="#"><button className="bet-slip-place-bet-btn">Place Bet</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}