import * as React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const sport = require('../assets/img/sport.png')
const basketbal = require('../assets/img/Basketbal.png')
const betting = require('../assets/img/tennis-betting-2018-min-1024x415.jpg')
const tennis = require('../assets/img/tennis-main.jpg')

export const Home = () => {

  return (
    <section id="bet-sec1">
      <div className="container-fluid">
        <div className="row bet-sec1-row1">
          <div className="col-sm-9 bet-sec1-row1-div2">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <OwlCarousel
                className="owl-theme carousel-inner"
                items={1}
                loop
                nav
                dotsClass="carousel-indicators"
                dotClass="dot"
                navContainerClass="navs-container"
                navClass={['carousel-control-prev', 'carousel-control-next']}
              >
                <div className="item">
                  <img className="d-block w-100" src={sport} alt="First slide" />
                </div>
                <div className="item">
                  <img className="d-block w-100" src={basketbal} alt="Second slide" />
                </div>
                <div className="item">
                  <img className="d-block w-100" src={betting} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="d-block w-100" src={tennis} alt="Third slide" />
                </div>
              </OwlCarousel>
            </div>
            <div className="bet-sec1-div1-football-basketball-tennis-div">
              <button className="bet-sec1-div1-football">Football</button>
              <button className="bet-sec1-div1-basketball">Basketball</button>
              <button className="bet-sec1-div1-tennis">Tennis</button>
            </div>
            <div id="lay_back_myDIV">
              <div className="bet-sec1-lay-back-div">
                <div className="bet-sec1-green-div">
                  <table className="bet-sec1-lay-back-table">
                  <tbody>
                    <tr>
                      <td className="bet-sec1-league-td"><a href="#">
                        <h1>Bahraini PR. League</h1>
                      </a></td>
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

                <div className="bet-sec1-light-green-div">
                  <a href="#">
                    <h5>Al Ahli Manama - Manama Club</h5>
                  </a>
                  <h6>5/2/2020 15:00</h6>
                </div>

                {/* <!--home table--> */}
                <table className="table table1 home-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Home</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b1');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b2');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>

                </table>
                <div id="b1" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b2" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>

                {/* <!--draw table--> */}
                <table className="table table1 draw-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Draw</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b3');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b4');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>
                </table>
                <div id="b3" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b4" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>

                {/* <!--away table--> */}

                <table className="table table1 home-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Away</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b5');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b6');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                </tbody>
                </table>
                <div id="b5" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b6" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
              </div>

              <div className="bet-sec1-lay-back-div">

                <div className="bet-sec1-green-div">
                  <table className="bet-sec1-lay-back-table">
                  <tbody>
                    <tr>
                      <td className="bet-sec1-league-td">
                        <h1>Club Friendlies</h1>
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

                <div className="bet-sec1-light-green-div">
                  <h5>Spartak Moscow - Lokomotiv Moscow</h5>
                  <h6>5/2/2020 15:00</h6>
                </div>

                {/* <!--home table--> */}
                <table className="table table1 home-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Home</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b7');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b8');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>

                </table>
                <div id="b7" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b8" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>

                {/* <!--draw table--> */}
                <table className="table table1 draw-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Draw</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b9');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b10');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>

                </table>
                <div id="b9" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b10" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>

                {/* <!--away table--> */}

                <table className="table table1 home-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Away</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b11');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b12');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>

                </table>
                <div id="b11" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b12" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
              </div>

              <div className="bet-sec1-lay-back-div">

                <div className="bet-sec1-green-div">
                  <table className="bet-sec1-lay-back-table">
                  <tbody>
                    <tr>
                      <td className="bet-sec1-league-td">
                        <h1>Greek Cup</h1>
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

                <div className="bet-sec1-light-green-div">
                  <h5>Panaitolikos - AEK Athens</h5>
                  <h6>5/2/2020 15:00</h6>
                </div>

                {/* <!--home table--> */}
                <table className="table table1 home-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Home</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b13');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b14');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>

                </table>
                <div id="b13" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b14" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>

                {/* <!--draw table--> */}
                <table className="table table1 draw-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Draw</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b15');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b16');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>

                </table>
                <div id="b15" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b16" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>

                {/* <!--away table--> */}

                <table className="table table1 home-table">
                <tbody>
                  <tr>
                    <td className="table1-td1">Away</td>
                    <td className="table1-td2"><button className="tab-btn1 table-box1-column lay_back_btn"
                      onclick="openTab('b17');">
                      <p>4.42</p>
                      <p>€ 90</p>
                    </button>

                      <button className="tab-btn1 table-box2-column lay_back_btn" onclick="openTab('b18');">
                        <p>4.43</p>
                        <p>€ 200</p>
                      </button>

                    </td>

                  </tr>
                  </tbody>

                </table>
                <div id="b17" className="blue-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
                <div id="b18" className="red-table-box1 table-box1-containerTab" style={{ display: "none" }}>
                  <div className="bet1-number table-box1-div1">
                    <h1>Lay(Bet against) Taipei Red Loins - Match Odds</h1>
                    <span className="minus">-</span>
                    <input type="number" />
                    <span className="plus">+</span>
                  </div>

                  <div className="bet1-number table-box1-div2">
                    <span className="minus">-</span>
                    <input type="number" className="mynumber" />
                    <span className="plus">+</span>
                  </div>

                  <button onclick="this.parentElement.style.display='none'"
                    className="cancel-btn table-box1-closebtn">Cancel</button>
                  <a href="#"><button className="place-btn">Place Bet</button></a>

                </div>
              </div>
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