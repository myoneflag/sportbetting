import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { Routes } from '../routes/routing'

import { FaGrid } from '../components/layouts'
import Header from './Header'
import Footer from './Footer'

import '../assets/styles/style.css';
import '../assets/styles/responsive.css';
import '../assets/fonts/font.css';
import 'bootstrap/dist/css/bootstrap.css';

export const Layout = () => {

  const history = useHistory()

  useEffect(() => {
  }, [])

  let location = useLocation()
  const currentPath = location.pathname

  return (
    <FaGrid container justify="center" relative>
      <Header />
      <Routes />
      <Footer />
    </FaGrid>
  )
}