import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { Routes } from '../routes/routing'

import { FaGrid } from '../components/layouts'
import Header from './Header'
import Footer from './Footer'

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