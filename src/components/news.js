import React, { Component } from 'react';

export default class News extends Component {
  render() {
    return (
      <div id="news">
        <section id="essentials">
          <div className="container">
            <div className="essentials-panel">
              <h2>The Essentials | Alan Watts Audio Collection</h2>
              <button className="btn btn-large btn-danger" type="button">
                <a
                  target="_blank" href="https://alan-watts-electronic-university.myshopify.com/collections/the-essential-collection"
                >Download
                </a>
              </button>
            </div>
          </div>
        </section>

        <section id="why-not-now">
          <div className="container">
            <div className="content">
              <h3>Why Not Now?</h3>
              <p>
                Why Not Now? is a documentary film on the life and works of Alan Watts, and follows his life-journey and philosophy as it emerged and was embraced by the youth of the counter culture and subsequent generations. Why Not Now? has been screened before half-a-dozen audiences and met with enthusiastic applause, with one viewer commenting that it was "a time machine that takes you back to the real heart of the revolution!"
              </p>
              <img src={require('../../public/imgs/whynotnow.jpg')} alt="why not now?" />
              <p>
                The documentary includes classic interviews, vintage film, art, and photos. to which we added contemporary footage of Japan and Big Sur, music by Garth Brooks, animation by Simpsons animator Eddie Rosas, and Japanese-style woodcut prints by Tom Killion, brought to life by special effects artist Bruce Walters. The result is a refreshing and engaging look at Alan Watts in the language and media of his time, directed by his son, Mark Watts. Each film comes with a bonus DVD disc with an hour of additional material, The Essential Alan Watts, a well as "The Animated Alan Watts", featuring vintage animations from The Fine Art of Goofing Off and shorts by the creators of South Park.
              </p>
            </div>
          </div>
        </section>

        <section id="why-not-now-parallax" data-type="background" data-speed="4">
          <div className="container">
            <div className="content">
              <h2>For a preview, click the button below!</h2>
              <p>
                <button className="btn btn-lg btn-block btn-success parallax-btn">
                  <a href="http://www.alanwattscenter.org/copy-of-about" target="_blank">
                    Preview
                  </a>
                </button>
              </p>
            </div>
          </div>
        </section>

        <section id="film-features">
          <div className="container">
            <div className="content">
              <h2>Alan Watts Re-Animated</h2>

              <p>
                Every order for Why Not Now? will now include an animated reel featuring vintage and contemporary animations of the spoken words of Alan Watts. This 23 minute DVD includes extracts from the groundbreaking 1972 series "The Fine Art of Goofing Off" as well as a couple of animations produced by the SouthPark creators and animators. The reel has been met with joyous laughter and standing ovations at recent film showings, and is not to be missed!
              </p>

              <h2>The documentary includes...</h2>
              <ul>
                <li>Classic interviews, vintage film, art, and photos</li>
                <li>Contemporary footage of Japan and Big Sur</li>
                <li>Music by Garth Brooks</li>
                <li>Animation by Simpsons animator Eddie Rosas </li>
                <li>Japanese-style woodcut prints by Tom Killion</li>
              </ul>

              <h2>Plus, each film comes with a bonus DVD with...</h2>
              <ul>
                <li>An hour of additional material</li>
                <li>The Essential Alan Watts </li>
                <li>The Animated Alan Watts, by the creator of South Park</li>
              </ul>

            </div>
          </div>
        </section>

        <section className="buy-now">
          <div className="container">
            <div className="content">
              <button type="button" className="btn btn-danger btn-large">
                <a target="_blank" href="http://www.alanwattscenter.org/copy-of-about">
                  Buy now
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
