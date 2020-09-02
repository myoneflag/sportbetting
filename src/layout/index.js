import React, { useState, useEffect, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { apis } from '../helpers'
import { Routes } from '../routes/routing'

import { makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/style.css';
import '../assets/styles/custom.css';
import '../assets/styles/responsive.css';
import '../assets/fonts/font.css';

const logo = require('../assets/img/logo.png')

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_SERVER : process.env.REACT_APP_DEV_SERVER;

const useStyles = makeStyles((theme) => ({
  loading: {
    width: `300px`,
    height: `2px`,
    backgroundColor: `transparent`,
    '& div': {
      backgroundColor: '#ffea00'
    }
  }
}))

export const Layout = () => {

  const classes = useStyles()
  const history = useHistory()

  let location = useLocation()
  const currentPath = location.pathname

  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState(null)
  const [eventData, setEventData] = useState([])

  const updateUserData = (verified) => {
    verified? getUserData() : verifyToken()
  }

  useEffect(() => {
    getEvent()
    verifyToken()
  }, [])

  useCallback(() => {

  }, [alert])

  const getEvent = async () => {
    console.log(currentPath);
    await axios.get(currentPath === '/'? apiUrl + apis.getEvents + '?live=true' : apiUrl + apis.getEvents + '?live=false')
      .then((res) => {
        console.log(res)
        if (res.statusText === "OK") {
          setEventData([...new Set(res.data.map(e => e.league))].map(league => {
            let tempEvents = res.data.filter(event => event.league === league)
            tempEvents.map((event, index) => {
              // console.log(event.match_result)
              let readtEvent = []
              try {
                if (Array.isArray(event.market_results)) readtEvent = [...event.market_results]
                else if (Array.isArray(JSON.parse(event.market_results.replace(/\'/g, '"')))) readtEvent = [...JSON.parse(event.market_results.replace(/\'/g, '"'))]
              } catch (err) {
                // console.log(event)
                // console.log(err)
              }
              tempEvents[index].market_results = [...readtEvent]
            })
            return {league, events: tempEvents}
          }))
        }
      })
      .catch((err) => {
        console.log('info', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get events info':'Error establishing a connection'})
      })

  }

  const verifyToken = () => {
    if (localStorage.getItem('refresh')) {
      axios.post(apiUrl + apis.tokenrefresh, {
        "refresh": localStorage.getItem('refresh')
      })
        .then((res) => {
          // console.log(`loggedin?`, res.data)
          if (res.data) {
            localStorage.setItem('access', res.data.access)
            getUserData()
          }
        })
        .catch((err) => {
          setLoading(false)
          console.log(err.response)
          setAlert({type: err.response? 'warning':'error', msg: err.response? 'Token expired. Login again':'Error establishing a connection'})
          localStorage.clear()
        })
    } else {
      setLoading(false)
      userData.loggedin = false
      // setUserData({...userData})
    }
  }

  const getUserData = async () => {
    let userData = {}
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
          userData.info = res.data
          // console.log(res.data)
        }
      })
      .catch((err) => {
        console.log('info', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user info':'Error establishing a connection'})
      })
    await axios.get(apiUrl + apis.getselfbet, config)
      .then((res) => {
        if (res.statusText === "OK") {
          console.log('bet', res.data)
          userData.bets = res.data
        }
      })
      .catch((err) => {
        console.log('bets', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user self bet':'Error establishing a connection'})
      })
    await axios.get(apiUrl + apis.getselfdeposit, config)
      .then((res) => {
        if (res.statusText === "OK") {
          // console.log('diposite', res.data)
          userData.deposits = res.data
        }
      })
      .catch((err) => {
        console.log(`deposits`, err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user self deposits':'Error establishing a connection'})
      })
    await axios.get(apiUrl + apis.getselfwithdrawal, config)
      .then((res) => {
        if (res.statusText === "OK") {
          // console.log('withdrawal', res.data)
          userData.withdrawals = res.data
        }
      })
      .catch((err) => {
        console.log('withdrawal', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user self withdrawal':'Error establishing a connection'})
      })
    setLoading(false)
    setUserData({...userData})
  }

  const getBetDataOnly = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('access')
      }
    }
    await axios.get(apiUrl + apis.getselfbet, config)
      .then((res) => {
        if (res.statusText === "OK") {
          console.log('bet', res.data)
          userData.bets = res.data
        }
      })
      .catch((err) => {
        console.log('bets', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user self bet':'Error establishing a connection'})
      })
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
          setUserData({...userData, ...{info: res.data}})
        }
      })
      .catch((err) => {
        console.log('info', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user info':'Error establishing a connection'})
      })
  }

  function getValidToken () {
    if (localStorage.getItem('refresh')) {
      axios.post(apiUrl + apis.tokenrefresh, {
        "refresh": localStorage.getItem('refresh')
      })
        .then((res) => {
          if (res.data) {
            localStorage.setItem('access', res.data.access)
            return true
          } else return false
        })
        .catch((err) => {
          setAlert({type: err.response? 'warning':'error', msg: err.response? 'Token expired. Login again':'Error establishing a connection'})
          return false
        })
    } else {
      return false
    }
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
            axios.post(apiUrl + apis.postEvent.replace('{slug}', data.slug), {...data}, config)
              .then((res) => {
                if (res.data) {
                  console.log(res.data)
                  setAlert({type: 'success', msg: 'Deposit successfully'})
                  getBetDataOnly()
                }
              })
              .catch((err) => {
                console.log('post-event', err.response)
                setAlert({type: err.response?'warning':'error', msg: err.response? 'Oop! Not able to place bet.':'Error establishing a connection'})
              })
          }
        })
        .catch((err) => {
          setAlert({type: err.response? 'warning':'error', msg: err.response? 'Token expired. Login again':'Error establishing a connection'})
        })
    } else {
      setAlert({type: 'warning', msg: 'Please Login'})
    }
  }

  const props = { apiUrl, currentPath, updateUserData, userData, submitDeposit, submiWithdrawal, eventData, postEvent, handleChangedSport: getEvent }

  return (
    loading? <Grid container justify="center" alignItems="center" className="loading" direction="column">
      <img src={logo} alt="" />
      <LinearProgress className={classes.loading}/>
    </Grid>:<Grid container>
      <Header {...props} />
      <Routes {...props} />
      {alert && <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={alert.msg && alert.type ? true : false} autoHideDuration={6000} onClose={() => setAlert(null)}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setAlert(null)} severity={alert.type}>
          {alert.msg}
        </MuiAlert>
      </Snackbar>}
      <Footer />
    </Grid>
  )
}