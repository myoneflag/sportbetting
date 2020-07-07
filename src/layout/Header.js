import React, { useState, useEffect } from 'react'

import * as Paths from '../routes'
import { country, date, month, year } from '../helpers'
// import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Popover from '@material-ui/core/Popover'
import Slide from '@material-ui/core/Slide'


const logo = require('../assets/img/logo.png')

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

const years = [{value:"", option:"Year"}]
for (var i = year.from; i < year.to; i++) {
  years.push({value:i, option:i})
}

const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/

const Header = ({ currentPath }) => {

  const [open, setOpen] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cc, setCc] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [dd, setDd] = useState('')
  const [mm, setMm] = useState('')
  const [yy, setYy] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [confirmpwd, setConfirmpwd] = useState('')

  const login = (e) => {
    e.preventDefault()
    if (!username) e.target.getElementsByClassName('username')[0].classList.add('required-text')
    else if (!emailReg.test(username.toLowerCase())) e.target.getElementsByClassName('username')[0].classList.add('required-text')
    else if (!password) e.target.getElementsByClassName('password')[0].classList.add('required-text')
    else console.log('login...')
  }

  const signup = (e) => {
    e.preventDefault()
    if (!cc) e.target.getElementsByClassName('country')[0].classList.add('required-text')
    else if (!fname) e.target.getElementsByClassName('firstname')[0].classList.add('required-text')
    else if (!lname) e.target.getElementsByClassName('lastname')[0].classList.add('required-text')
    else if (!dd) e.target.getElementsByClassName('date')[0].classList.add('required-text')
    else if (!mm) e.target.getElementsByClassName('month')[0].classList.add('required-text')
    else if (!yy) e.target.getElementsByClassName('year')[0].classList.add('required-text')
    else if (!email) e.target.getElementsByClassName('email')[0].classList.add('required-text')
    else if (!emailReg.test(email.toLowerCase())) e.target.getElementsByClassName('email')[0].classList.add('required-text')
    else if (!pwd) e.target.getElementsByClassName('pwd')[0].classList.add('required-text')
    else if (!confirmpwd) e.target.getElementsByClassName('confirm-pwd')[0].classList.add('required-text')
    else if (pwd !== confirmpwd) {
      e.target.getElementsByClassName('pwd')[0].classList.add('required-text')
      e.target.getElementsByClassName('confirm-pwd')[0].classList.add('required-text')
    }
    else console.log('join...')
  }

  useEffect(() => {
    const targets = document.getElementsByClassName('required-text')
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.remove('required-text')
    }
  }, [username, password, cc, fname, lname, dd, mm, yy, email, pwd, confirmpwd])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpenSidebar = () => {
    setOpenSidebar(true)
  }

  const handleCloseSidebar = () => {
    setOpenSidebar(false)
  }

  const handleClickOpenLogin = () => {
    setOpenLogin(true)
  }

  const handleCloseLogin = () => {
    setOpenLogin(false)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseSearch = () => {
    setAnchorEl(null)
  }

  const openSearch = Boolean(anchorEl)
  const id = openSearch ? 'simple-popover' : undefined

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top nav1">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"></a> */}
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="open-btn" style={{ fontSize: '30px', cursor: 'pointer' }} onClick="openNav()">&#9776;</span>
          </button> */}
          <div className="collapse navbar-collapse nav1" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Help</a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light nav2">
        <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className={`active-menu ${currentPath === Paths.CONTACT ? 'active' : ''}`}>
              <a className="nav-link" href="/contact">Intro</a>
            </li>
            <li className={`active-menu ${currentPath === Paths.HOME ? 'active' : ''}`}>
              <a className="nav-link" href="/">Live games</a>
            </li>
            <li className={`active-menu ${currentPath === Paths.FUTURE ? 'active' : ''}`}>
              <a className="nav-link" href="/future">Future games</a>
            </li>
          </ul>
        </div>
        <div className="nav2-last-div">
          {/* <form>
              <input type="search" name="search" placeholder="" />
            </form> */}
          <div className="dropdown-custom search-div">
            <button type="button" className="dropdown-toggle" onClick={handleClick}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <Popover
            id={id}
            open={openSearch}
            anchorEl={anchorEl}
            onClose={handleCloseSearch}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className="dropdown-custom search-div">
              <div className="dropdown-menu-custom show">
                <input type="search" id="gsearch" name="gsearch" />
                <input type="submit" />
              </div>
            </div>
          </Popover>
          <button type="button" className="join-btn" onClick={handleClickOpen}>Join</button>
          <button type="button" className="login-btn" onClick={handleClickOpenLogin}>Log In</button>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
          <Dialog
            open={openSidebar}
            onClose={handleCloseSidebar}
            scroll={'body'}
            TransitionComponent={Transition}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div id="mySidenav" className="sidenav">
              <span className="closebtn" onClick={handleCloseSidebar}>&times;</span>
              <a href="/contact">Intro</a>
              <a href="/">Live games</a>
              <a href="/future">Future games</a>
            </div>
          </Dialog>
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={handleClickOpenSidebar} className="sidebar-toggle">&#9776; </span>
        </div>
      </nav>
      <Dialog
        open={openLogin}
        onClose={handleCloseLogin}
        scroll={'body'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="container login-popup-container">
          <div className="modal-custom" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={handleCloseLogin}>&times;</button>
                </div>
                <div className="modal-body">
                  <form onSubmit={(e) => login(e)}>
                    <input className="username" type="text" name="name" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
                    <input className="password" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" name="login" value="Log In" />
                  </form>
                  <a href="/fogotpassword" className="lost-login">Lost Login?</a>
                </div>
                <div className="modal-footer">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'body'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="container join-popup-container">
          <div className="modal-custom" id="myModal1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={handleClose}>&times;</button>
                </div>
                <div className="modal-body">
                  <section id="sign-sec">
                    <div className="container">
                      <div className="row sign-sec-row1">
                        <div className="col-sm-12">
                          <h1>Sign Up</h1>
                          <h2>Please enter accurate information. Your identity must be verified to allow continued use of your
                    account</h2>
                        </div>
                      </div>
                      <form className="sign-form" onSubmit={(e) => signup(e)}>
                        <div className="row sign-sec-row2">
                          <div className="col-sm-12">
                            <h5> Country of residence</h5>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect1">Country</label>
                              <select className="form-control country" id="exampleFormControlSelect1" onChange={(e) => setCc(e.target.value)}>
                                {
                                  country.map((cou, index) => <option value={cou.value} key={index}>{cou.option}</option>)
                                }
                              </select>
                            </div>
                            <h5>personal information</h5>
                            <div className="form-group">
                              <label htmlFor="exampleInputFirstName">First Name</label>
                              <input type="text" className="form-control firstname" id="exampleInputFirstName" aria-describedby="emailHelp"
                                placeholder="First Name" onChange={(e) => setFname(e.target.value)} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputLastName">Last Name</label>
                              <input type="text" className="form-control lastname" id="exampleInputLastName" aria-describedby="emailHelp"
                                placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
                            </div>
                            <div className="form-group date-div">
                              <label htmlFor="birthday">Birthday:</label>
                              <select className="date" name="date" id="date" onChange={(e) => setDd(e.target.value)}>
                                {
                                  date.map((dat, index) => <option value={dat.value} key={index}>{dat.option}</option>)
                                }
                              </select>

                              <select className="month" name="month" id="month" onChange={(e) => setMm(e.target.value)}>
                                {
                                  month.map((mon, index) => <option value={mon.value} key={index}>{mon.option}</option>)
                                }
                              </select>

                              <select className="year" name="year" id="year" onChange={(e) => setYy(e.target.value)}>
                                {
                                  years.map((yea, index) => <option value={yea.value} key={index}>{yea.option}</option>)
                                }
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="text" className="form-control email" id="exampleInputEmail1" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control pwd" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                              <input type="password" className="form-control confirm-pwd" id="exampleInputConfirmPassword1"
                                placeholder=" Confirm Password" onChange={(e) => setConfirmpwd(e.target.value)} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label htmlFor="exampleInputAnswer"></label>
                              <input type="submit" name="submit" value="Sign Up" className="sign-submit" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Header