import React, { useState, useEffect } from 'react'
// import { useLocation, useHistory, Route } from 'react-router-dom'

// import { Routes } from '../routes/routing'
// import * as Paths from '../routes'
import {country, date, month, year} from '../helpers'

const logo = require('../assets/img/logo.png')

const Header = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top nav1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="open-btn" style={{ fontSize: '30px', cursor: 'pointer' }} onClick="openNav()">&#9776;</span>
          </button>
          <div className="collapse navbar-collapse nav1" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light nav2">
        <a className="navbar-brand" href="#"><img src={logo} /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="active-menu active">
              <a className="nav-link" href="#">Intro <span className="sr-only">(current)</span></a>
            </li>
            <li className="active-menu">
              <a className="nav-link" href="#">Sports</a>
            </li>
            <li className="active-menu">
              <a className="nav-link" href="#">Live</a>
            </li>
          </ul>
        </div>
        <div className="nav2-last-div">
          {/* <form>
              <input type="search" name="search" placeholder="" />
            </form> */}
          <div className="dropdown search-div">
            <button type="button" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fas fa-search"></i>
            </button>
            <div className="dropdown-menu">
              <input type="search" id="gsearch" name="gsearch" />
              <input type="submit" />
            </div>
          </div>
          <button type="button" className="join-btn" data-toggle="modal" data-target="#myModal1">Join</button>
          <button type="button" className="login-btn" data-toggle="modal" data-target="#myModal">Log In</button>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
          <div id="mySidenav" className="sidenav">
            {/* <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a> */}
            <a href="#">Intro</a>
            <a href="#">Sports</a>
            <a href="#">Live</a>
          </div>
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick="openNav()" className="sidebar-toggle">&#9776; </span>
        </div>
      </nav>
      <div className="container login-popup-container">
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <input type="text" name="name" placeholder="Username" />
                  <input type="password" name="password" placeholder="Password" />
                  <input type="submit" name="login" value="Log In" />
                </form>
                <a href="#" className="lost-login">Lost Login?</a>
              </div>
              <div className="modal-footer">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container join-popup-container">
        <div className="modal" id="myModal1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
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
                    <div className="row sign-sec-row2">
                      <div className="col-sm-12">
                        <form className="sign-form">
                          <h5> Country of residence</h5>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Country</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                              {
                                country.map((cou, index) => <option value={cou.value} key={index}>{cou.option}</option>)
                              }
                            </select>
                          </div>
                          <h5>personal information</h5>
                          <div className="form-group">
                            <label htmlFor="exampleInputFirstName">First Name</label>
                            <input type="text" className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp"
                              placeholder="First Name" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputLastName">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp"
                              placeholder="Last Name" />
                          </div>
                          <div className="form-group date-div">
                            <label htmlFor="birthday">Birthday:</label>
                            <select name="date" id="date">
                              {
                                date.map((dat, index) => <option value={dat.value} key={index}>{dat.option}</option>)
                              }
                            </select>

                            <select name="month" id="month">
                              {
                                month.map((mon, index) => <option value={mon.value} key={index}>{mon.option}</option>)
                              }
                            </select>

                            <select name="year" id="year">
                              {
                                year.map((yea, index) => <option value={yea.value} key={index}>{yea.option}</option>)
                              }
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                              placeholder="Enter email" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputConfirmPassword1"
                              placeholder=" Confirm Password" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleInputAnswer"></label>
                            <input type="submit" name="submit" value="Sign Up" className="sign-submit" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header