import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import * as Paths from '../routes'
import { country, date, month, year, apis } from '../helpers'
import Dialog from '@material-ui/core/Dialog'
import Popover from '@material-ui/core/Popover'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

const logo = require('../assets/img/logo.png')

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  bgModal: {
    '& .MuiPaper-root': {
      backgroundColor: '#29343a!important',
      color: '#aaa !important',
      margin: '1.75rem auto !important',
      '& input:focus': {
        color: '#818181 !important',
        background: 'transparent!important'
      },
      '& .MuiInput-underline:before': {
        borderBottom: '1px solid rgb(244 245 245)'
      },
      '& .MuiDialogContentText-root, & .MuiInputLabel-root': {
        color: 'white !important'
      },
      '& button': {
        letterSpacing: '0.5px',
        border: 'none!important',
        color: 'white',
        textTransform: 'capitalize !important'
      }
    }
  },
  modalButton: {
    '&:not([disabled])': {
      background: '#79a83d!important'
    }
  },
  settingPopover: {
    '& .MuiPopover-paper': {
      backgroundColor: '#29343a!important',
      '& .MuiList-padding, & .MuiListItem-root': {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      },
      '& .MuiListItemText-root': {
        color: 'white'
      }
    }
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

const years = [{ value: "", option: "Year" }]
for (var i = year.from; i < year.to; i++) {
  years.push({ value: i, option: i })
}

const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_SERVER : process.env.REACT_APP_DEV_SERVER;

const Header = (props) => {
  const { currentPath, userData, updateUserData } = props // submitDeposit, submiWithdrawal
  const classes = useStyles()
  // console.log(userData)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElSetting, setAnchorElSetting] = useState(null)
  const [openDeposit, setOpenDeposit] = useState(false)
  const [depositCode, setDepositCode] = useState('')
  const [openWithdrawal, setOpenWithdrawal] = useState(false)
  const [withdrawalAmount, setWithdrawalAmount] = useState(0)

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

  const [name, setName] = useState('')
  const [cemail, setCemail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [alert, setAlert] = useState(null)

  const [uData, setUData] = useState(userData.info)

  const userBalance = uData && uData.balance ? uData.balance : 0

  useEffect(() => {
    setUData(userData.info)
  }, [userData])

  const contact = (e) => {
    e.preventDefault()
    if (!name) e.target.getElementsByClassName('name')[0].classList.add('required-text')
    else if (!cemail) e.target.getElementsByClassName('contact-email')[0].classList.add('required-text')
    else if (!emailReg.test(cemail.toLowerCase())) e.target.getElementsByClassName('contact-email')[0].classList.add('required-text')
    else if (!subject) e.target.getElementsByClassName('subject')[0].classList.add('required-text')
    else if (!message) e.target.getElementsByClassName('message')[0].classList.add('required-text')
    else setOpenContact(false)
  }

  useEffect(() => {
    const targets = document.getElementsByClassName('required-text')
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.remove('required-text')
    }
  }, [name, cemail, subject, message])

  const login = (e) => {
    e.preventDefault()
    if (!username) e.target.getElementsByClassName('username')[0].classList.add('required-text')
    else if (!emailReg.test(username.toLowerCase())) e.target.getElementsByClassName('username')[0].classList.add('required-text')
    else if (!password) e.target.getElementsByClassName('password')[0].classList.add('required-text')
    else {
      console.log('login...')
      setLoading(true)
      axios.post(userData.apiUrl + apis.login, {
        email: username,
        password: password
      })
        .then((res) => {
          setLoading(false)
          if (res.data) {
            console.log(res.data)
            setAlert({ type: 'success', msg: 'Login successful' })
            setOpenLogin(false)
            localStorage.setItem('access', res.data.access)
            localStorage.setItem('refresh', res.data.refresh)
            updateUserData(true)
          }
        })
        .catch((err) => {
          setLoading(false)
          setOpenLogin(true)
          setAlert({ type: 'error', msg: err.response ? 'Wrong credentials' : 'Error establishing a connection' })
        })
    }
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
    else {
      setOpen(false)
      console.log('signup...')
      setLoading(true)
      axios.post(userData.apiUrl + apis.register, {
        email: email,
        password: pwd,
        confirm_password: confirmpwd,
        first_name: fname,
        last_name: lname,
        country: cc,
        birth_date: yy + '-' + mm + '-' + dd
      })
        .then((res) => {
          setLoading(false)
          if (res.data) {
            console.log('register success', res.data)
            setAlert({ type: 'success', msg: 'Registeration successful' })
            setOpenLogin(true)
          } else {
            setOpen(true)
          }
        })
        .catch((err) => {
          setLoading(false)
          setOpen(true)
          console.log(err.response)
          setAlert({ type: 'error', msg: err.response ? 'Wrong credentials' : 'Error establishing a connection' })
        })
    }
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
  const handleCloseContact = () => {
    setOpenContact(false)
  }

  const handleOpenContact = () => {
    handleCloseSidebar()
    setOpenContact(true)
  }

  const handleClickLogout = () => {
    localStorage.clear()
    setAlert({ type: 'warning', msg: 'Logged out' })
    updateUserData()
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

  const handleSubmitWithdrawal = () => {
    setOpenWithdrawal(false)
    submiWithdrawal(withdrawalAmount)
  }

  const handleSubmitDeposit = () => {
    setOpenDeposit(false)
    submitDeposit(depositCode)
  }
  
  const getUserDataOnly = async () => {
    userData.loggedin = true
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('access')
      }
    }
    await axios.get(apiUrl + apis.getselfinfo, config)
      .then((res) => {
        if (res.statusText === "OK") {
          // console.log('info', res.data)
          setUData(res.data)
        }
      })
      .catch((err) => {
        console.log('info', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user info':'Error establishing a connection'})
      })
  }

  const submitDeposit = (code) => {
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
            axios.post(apiUrl + apis.prepaidCardDeposit, {code}, config)
              .then((res) => {
                if (res.data) {
                  // console.log(res.data)
                  setAlert({type: 'success', msg: 'Deposit successfully'})
                  getUserDataOnly()
                }
              })
              .catch((err) => {
                // console.log('info', err.response)
                setAlert({type: err.response?'warning':'error', msg: err.response? err.response.data.code[0]:'Error establishing a connection'})
              })            
          }
        })
        .catch((err) => {
          setAlert({type: err.response? 'warning':'error', msg: err.response? 'Token expired. Login again':'Error establishing a connection'})
        })
    } else {
      setAlert({type: 'warning', msg: 'Token expired. Login again'})
    }
  }

  const submiWithdrawal = (amount) => {
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
            axios.post(apiUrl + apis.withdrawals, {amount}, config)
              .then((res) => {
                if (res.data) {
                  // console.log(res.data)
                  setAlert({type: 'success', msg: 'Withdrawal successfully'})
                  getUserDataOnly()
                }
              })
              .catch((err) => {
                // console.log('info', err.response)
                setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to withdrawal':'Error establishing a connection'})
              })          
          }
        })
        .catch((err) => {
          setAlert({type: err.response? 'warning':'error', msg: err.response? 'Token expired. Login again':'Error establishing a connection'})
        })
    } else {
      setAlert({type: 'warning', msg: 'Token expired. Login again'})
    }
  }


  const handleDeposit = () => {
    setAnchorElSetting(null)
    setOpenDeposit(true)
  }

  const handleWithdrawal = () => {
    setAnchorElSetting(null)
    setOpenWithdrawal(true)
  }

  const openSearch = Boolean(anchorEl)
  const id = openSearch ? 'simple-popover' : undefined

  const openSetting = Boolean(anchorElSetting);
  const idSetting = openSetting ? 'setting-popover' : undefined;

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
            <li className={`active-menu ${currentPath === Paths.HOME ? 'active' : ''}`}>
              <a className="nav-link" href="/">Live games</a>
            </li>
            <li className={`active-menu ${currentPath === Paths.FUTURE ? 'active' : ''}`}>
              <a className="nav-link" href="/future">Future games</a>
            </li>
            <li className={`active-menu ${currentPath === Paths.CONTACT ? 'active' : ''}`} onClick={() => setOpenContact(true)}>
              <a className="nav-link">Contact us</a>
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
          {userData.loggedin ?
            <>
              <p className="mb-0 user-balance">{userBalance.toFixed(2).toLocaleString()}€</p>
              <button aria-describedby={idSetting} type="button" className="avatar" onClick={(event) => setAnchorElSetting(event.currentTarget)}>
                <i className="fas fa-user"></i>
              </button>
              <Popover
                id={idSetting}
                open={openSetting}
                anchorEl={anchorElSetting}
                onClose={() => setAnchorElSetting(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                className={classes.settingPopover}
              >
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItem button>
                    <ListItemText primary="Deposit" onClick={handleDeposit} />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Withdrawal" onClick={handleWithdrawal} />
                  </ListItem>
                </List>
              </Popover>
              <button type="button" className="join-btn not-mobile" onClick={handleClickLogout}>Log out</button>
            </>
            :
            <>
              <button type="button" className="join-btn" onClick={handleClickOpen}>Join</button>
              <button type="button" className="login-btn" onClick={handleClickOpenLogin}>Log In</button>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            </>}
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
              <a href="/">Live games</a>
              <a href="/future">Future games</a>
              <a onClick={() => handleOpenContact()}>Contact us</a>
              <a className="is-mobile" onClick={() => handleClickLogout()}>Log out</a>
            </div>
          </Dialog>
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={handleClickOpenSidebar} className="sidebar-toggle">&#9776; </span>
        </div>
      </nav>
      <Dialog open={openDeposit} onClose={() => setOpenDeposit(false)} aria-labelledby="form-dialog-title" className={classes.bgModal}>
        <DialogTitle>Deposit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter prepaid card deposit code
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="code"
            label="Code"
            type="number"
            fullWidth
            onChange={(e) => setDepositCode(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeposit(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmitDeposit} color="primary" variant="contained" disabled={depositCode.toString().length !== 16} className={classes.modalButton}>
            Deposit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openWithdrawal} onClose={() => setOpenWithdrawal(false)} aria-labelledby="form-dialog-title" className={classes.bgModal}>
        <DialogTitle>Withdrawal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter withdrawal amount
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            onChange={(e) => setWithdrawalAmount(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenWithdrawal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmitWithdrawal} color="primary" variant="contained" disabled={withdrawalAmount <= 0 || userBalance < withdrawalAmount} className={classes.modalButton}>
            Withdrawal
          </Button>
        </DialogActions>
      </Dialog>
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
                    <input type="submit" name="login" value={loading ? `Logging In...` : `Log In`} disabled={loading} />
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
        open={openContact}
        fullWidth
        id="contact-dialog"
        onClose={handleCloseContact}
        scroll={'body'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <section id="contact-sec1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-7 contact-sec1-div1">
              </div>
              <div className="col-sm-5">
                <h1>Contact Us</h1>
                <h2>Have any question? We'd love to hear from you.</h2>
                <form className="contact-sec1-form" onSubmit={(e) => contact(e)}>
                  <div className="form-group">
                    <input type="text" className="form-control name" id="exampleInputName" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control contact-email" id="exampleInputEmail2" placeholder="Email" onChange={(e) => setCemail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control subject" id="exampleInputSubject" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <textarea id="w3review" className="message" name="w3review" rows="4" cols="50" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" name="submit" value="Submit" className="contact-submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
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
                              <input type="submit" name="submit" value={loading ? `Signing Up...` : `Sign Up`} disabled={loading} className="sign-submit" />
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
      {alert && <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={alert.msg && alert.type ? true : false} autoHideDuration={6000} onClose={() => setAlert(null)}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setAlert(null)} severity={alert.type}>
          {alert.msg}
        </MuiAlert>
      </Snackbar>}
    </div>
  )
}

export default Header