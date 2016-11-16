import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-10">
              <div className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Contact Information</h2>
                    <span>Alan Watts Electronic University Post Office Box 2309</span><br />
                    <span>San Anselmo, CA, 94979</span><br />
                    <span>Mark Watts @ Electronic University</span><br />
                    <span>watts@alanwatts.com</span><br />

                    <span>tel: 415-377-1383</span><br />
                  </div>
                  <div className="col-md-6 support">
                    <p>Please support the free Alan Watts app and web films here</p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input type="hidden" name="hosted_button_id" value="8VHE3EC4BUNPE" />
                      <button
                        className="btn btn-danger btn-large"
                        type="submit"
                      >Support</button>
                      <img alt="" border="0" src="https://www.paypalobjects.com/WEBSCR-640-20110306-1/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>

                  </div>

                </div>
                <div className="row">
                  <img
                    className="contact-image" src={require('../../public/imgs/contact-1.jpg')}
                  />

                  <img
                    style={{float: 'right'}}
                    className="contact-image" src={require('../../public/imgs/contact-2.jpg')}
                  />
                </div>
              </div>

            </div>
            <div className="col-md-1">
            </div>
          </div>
        </div>
      </section>
    );
  }
}
