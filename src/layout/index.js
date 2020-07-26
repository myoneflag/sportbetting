import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { apis } from '../helpers'
import { Routes } from '../routes/routing'

import { makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
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
          console.log(err.response)
        })
    } else {
      userData.loggedin = false
      setuserData({...userData})
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
      })
    setLoading(false)
    setuserData({...userData})
  }

  return (
    loading? <Grid container justify="center" alignItems="center" className="loading" direction="column">
      <img src={logo} alt="" />
      <LinearProgress className={classes.loading}/>
    </Grid>:<Grid container>
      <Header currentPath={currentPath} updateUserData={updateUserData} userData={userData}/>
      <Routes updateUserData={updateUserData} userData={userData}/>
      <Footer />
    </Grid>
  )
}