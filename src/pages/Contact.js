import React, { useState, useEffect } from 'react'

const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const contact = (e) => {
    e.preventDefault()
    if (!name) e.target.getElementsByClassName('name')[0].classList.add('required-text')
    else if (!email) e.target.getElementsByClassName('contact-email')[0].classList.add('required-text')
    else if (!emailReg.test(email)) e.target.getElementsByClassName('contact-email')[0].classList.add('required-text')
    else if (!subject) e.target.getElementsByClassName('subject')[0].classList.add('required-text')
    else if (!message) e.target.getElementsByClassName('message')[0].classList.add('required-text')
    else console.log('contact...')
  }

  useEffect(() => {
    const targets = document.getElementsByClassName('required-text')
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.remove('required-text')
    }
  }, [name, email, subject, message])

  return (
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
                <input type="text" className="form-control contact-email" id="exampleInputEmail2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
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
    </section>)
}