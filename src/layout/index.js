import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

  let location = useLocation()
  const currentPath = location.pathname

  const [userData, setuserData] = useState({apiUrl})
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState(null)

  const updateUserData = (verified) => {
    verified? getUserData() : verifyToken()
  }

  useEffect(() => {
    verifyToken()
  }, [])

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
        })
    } else {
      setLoading(false)
      userData.loggedin = false
      // setuserData({...userData})
    }
  }

  const getUserData = async () => {
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
        }
      })
      .catch((err) => {
        console.log('info', err.response)
        setAlert({type: err.response?'warning':'error', msg: err.response? 'Not able to get user info':'Error establishing a connection'})
      })
    await axios.get(apiUrl + apis.getselfbet, config)
      .then((res) => {
        if (res.statusText === "OK") {
          // console.log('bet', res.data)
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
    setuserData({...userData})
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
                  getUserData()
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
                  getUserData()
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

  return (
    loading? <Grid container justify="center" alignItems="center" className="loading" direction="column">
      <img src={logo} alt="" />
      <LinearProgress className={classes.loading}/>
    </Grid>:<Grid container>
      <Header currentPath={currentPath} updateUserData={updateUserData} userData={userData} submitDeposit={submitDeposit} submiWithdrawal={submiWithdrawal} />
      <Routes updateUserData={updateUserData} userData={userData}/>
      {alert && <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={alert.msg && alert.type ? true : false} autoHideDuration={6000} onClose={() => setAlert(null)}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setAlert(null)} severity={alert.type}>
          {alert.msg}
        </MuiAlert>
      </Snackbar>}
      <Footer />
    </Grid>
  )
}