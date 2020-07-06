import React from 'react'

const logo1 = require('../assets/img/logo-1.png')
const logo2 = require('../assets/img/logo-2.png')
const logo3 = require('../assets/img/logo-3.png')
const logo4 = require('../assets/img/logo-4.png')
const logo5 = require('../assets/img/logo-5.png')
const footer18 = require('../assets/img/footer-18.png')

const Footer = () => {

  return (
    <footer>
      <div className="container footer-container">
        <div className="row footer_row">
          <div className="col-sm-12 footer-quick-links-row">
            <p className="alt-lang"><a href="/help">Help</a></p>
            <div className="vl"></div>
            <p className="alt-lang"><a href="/help">Responsible Gambling</a></p>
          </div>
        </div>
        <div className="row footer-logo-row">
          <div className="col-sm-12">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </div>
        <div className="row footer_row1">
          <div className="col-sm-12">
            <h3>Online Sports Betting</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
              of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very </p>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt</p>

            <div className="social-icon-div">
              <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a href="instagram.com"><i className="fab fa-instagram"></i></a>
              <a href="twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="youtube.com"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row footer-row3">
          <div className="col-sm-12">
            <img src={footer18} alt="" />
            <p className="Copyright-p"> Copyright<i className="far fa-copyright"></i> 2020</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer