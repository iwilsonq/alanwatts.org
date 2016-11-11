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
      </div>
    );
  }
}
