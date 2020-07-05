import React, { useState, useEffect } from 'react'
import { useLocation, useHistory, Route } from 'react-router-dom'

// import { Routes } from '../routes/routing'
import * as Paths from '../routes'

import { FaGrid } from '../components/layouts'

const Header = () => {

  return (
    <FaGrid container justify="space-between" className="header" px={30}>
    </FaGrid>
  )
}

export default Header