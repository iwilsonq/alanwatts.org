import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <Grid>
          <h2 className="text-center">About Alan Watts</h2>
        <Row>
            <Col md={3}>
              <img
                className="young-watts"
                src={require('../../public/imgs/youngwatts.jpg')}
                alt=""
              />
            </Col>
            <Col md={9}>
              <h3>Early years</h3>
              <p id='early-years'>
              Alan Watts was born in London in 1915, at the start of the first World War. At a young age he became fascinated with the Far East, and at fourteen he began to write and was published in the Journal of the London Buddhist Lodge before writing his first booklet on Zen in 1932. He moved to New York in 1938 and then to Chicago, where he served as an Episcopal priest for six years before leaving the Church. In 1950, he moved to upstate New York before going on to San Francisco to teach at the Academy of Asian Studies. Among Alan Watts earliest influences were the novelist Sax Rohmer and Zen scholars D.T. Suzuki and Christmas Humpreys. In late 1950, he visited with Joseph Campbell and composer John Cage in NYC.
              </p>
              <br />
              <h3>Worldview</h3>
              <p id='worldview'>
              Alan Watts was profoundly influenced by the East Indian philosophies of Vedanta and Buddhism, and by Taoist thought, which is reflected in Zen poetry and the arts of China and Japan. After leaving the Church, he never became a member of another organized religion, and although he wrote and spoke extensively about Zen Buddhism, he was criticized by American Buddhist practicioners for not sitting regularly in zazen. Alan Watts responded simply by saying, "A cat sits until it is done sitting, and then gets up, stretches, and walks away."
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <h3>1950's and early '60's</h3>
              <p id='fifties'>
              After teaching at the Academy of Asian Studies in San Francisco, he became Dean and began to give regular radio talks on KPFA, the Berkeley free radio station. In 1957, he published his bestselling Way of Zen, and in 1958 returned to Europe where he met with C.G. Jung. He was an early subject in pioneering psychedelic trials, and, after recording two seasons of the public television series Eastern Wisdom and Modern Life, traveled to Japan several times in the early sixties. By the late sixties, he had become a counterculture celebrity, and traveled widely to speak at universities and growth centers across the US and Europe.
              </p>
              <br />
              <h3>Later years</h3>
              <p id='later-years'>
              By the early seventies, Alan Watts had become a foremost interpreter of Eastern thought for the West, and was widely published in periodicals including Earth, Elle, Playboy, and Redbook. He appeared on CBS television's Camera Three in 1969, and in 1971 he recorded a pilot for a new show titled A Conversation with Myself for NET, the precursor to PBS. When the series was not produced, he recorded the shows with his son Mark and his long-time audio archivist Henry Jacobs in 1972. Overall, Alan Watts developed an extensive audio library of nearly 400 talks and wrote more than 25 books during his lifetime, including his final volume, Tao: The Watercourse Way. Alan Watts died in his sleep in November of 1973, after returning from an intensive international lecture tour.
              </p>
            </Col>
            <Col md={3}>
              <img
                className="older-watts"
                src={require('../../public/imgs/olderwatts.jpg')}
                alt=""
              />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
