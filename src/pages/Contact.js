import * as React from 'react'

export const Contact = () => {

  return (
    <section id="contact-sec1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7 contact-sec1-div1">
          </div>
          <div className="col-sm-5">
            <h1>Contact Us</h1>
            <h2>Have any question? We'd love to hear from you.</h2>
            <form className="contact-sec1-form">
              <div className="form-group">
                <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="exampleInputSubject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Message"></textarea>
              </div>
            </form>
            <form>
              <div className="form-group">
                <input type="submit" name="submit" value="Submit" className="contact-submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>)
}