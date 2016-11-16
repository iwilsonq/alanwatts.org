import React, { Component } from 'react'

export default class Center extends Component {
  render() {
    return (
      <div className='center'>
        <section id='center'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-4">
                <h1 className='hero-text'>The Alan Watts Mountain Center</h1>
                <p className='center-location'>Pt. Reyes National Seashore north of San Francisco</p>
              </div>
              <div className="col-md-4">
                <div className="center-panel">

                  <img  src={require('../../public/imgs/center-1.jpg')} alt=""
                  />
                  <img src={require('../../public/imgs/center-2.jpg')} alt=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="center-summary center-panel">
                  <h2>Mission</h2>

                  <p>The Alan Watts Mountain Center will facilitate the work of the educational non-profit.</p>

                  <p>Our primary mission is to produce educational programs that enhance the human potential, and although we have traditionally created materials for public radio, today our offerings include a podcast and YouTube components with downloads approaching the ten million mark. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="center-more-info">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>One of the long-term missions of the Center is to complete the Alan Watts digital archive, and of course to continue the dissemination of his extensive collection of recordings. In addition to online publishing, we will continue to make the Alan Watts archive accessible for educational and creative productions by providing materials to libraries, educators, producers, writers, musicians, editors, animators, and others. </p>
              </div>
              <div className="col-md-6">
                <img
                  className='center-info-image' src={require('../../public/imgs/old-letters.jpeg')} alt=""
                />

              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img
                  className='center-info-image' src={require('../../public/imgs/reyes.jpg')} alt=""
                />
              </div>
              <div className="col-md-6">
                <p>In the near term the Center facilities will become home to Alan Watts web publishing, online broadcasting and podcasting (see alanwattspodcast.com). The Center will also be a meeting place for working groups and occasional retreats, and the Center's library will house a unique collection of works related to Alan Watts's passion for visual language, including calligraphy by Japanese artist Sabro Hasegawa and an extensive photo archive. The Center is being built using ecologically appropriate materials, including wood from fallen fir and cypress trees, and has been designed according to principles of sustainable architecture pioneered by organic architect Daniel Libermann. To date sixty-five percent of the main Lodge to house library and film resources has been completed, and studio and guest facilities are in various stages of construction. At present we are focusing on raising funds for completion of the library and film center in Phase I. </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>In Phase II we will complete a separate production studio, and in Phase III we will add a guest wing to the Lodge. Upon completion each building phase will add to the Center's capabilities. </p>
              </div>
              <div className="col-md-6">
                <p>The Center is currently seeking support on all levels, and anyone interested in helping should contact Mark Watts by email at <a href="mailto:watts@alanwatts.com">watts@alanwatts.com</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
