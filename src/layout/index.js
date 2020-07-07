import React from 'react'
import { useLocation } from 'react-router-dom'

import { Routes } from '../routes/routing'

import Grid from '@material-ui/core/Grid'
import Header from './Header'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';
import '../assets/styles/custom.css';
import '../assets/fonts/font.css';

export const Layout = () => {

  let location = useLocation()
  const currentPath = location.pathname

  return (
    <Grid container>
      <Header currentPath={currentPath} />
      <Routes />
      <Footer />
    </Grid>
  )
}