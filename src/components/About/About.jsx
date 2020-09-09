import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          {/* <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col> */}
          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I\'m a Software Developer working for Continuous Software in Dublin. You might also see me in Riyadh, Saudi Arabia as a React.js consultant for DellEMC from time to time!'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'My passion is to create beautiful experiences. I spend my time experimenting and researching the latest technology. I am a lifelong learner; it empowers me to create magnificent products.'}
                </p>
                {/* <Row>
                  <div style={{ padding: 20 }}>
                    <h3>Current Position: Lead Software Developer</h3>
                  </div>
                </Row> */}
                <Row>
                  <Col md={6} sm={12}>
                    <div>
                      <a href="http://www.continuoussoftware.ie" target="_blank">
                        <img src={require('../../images/cs.jpg')} style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10, marginBottom: 10 }} />
                      </a>
                      <p style={{ fontSize: 16 }}>Lead Software Developer</p>
                      <p style={{ fontSize: 14 }}>Continuous Software Ltd</p>
                      <p style={{ fontStyle: 'italic', fontSize: 14 }}>Dublin, Ireland</p>
                      <p style={{ fontStyle: 'italic', fontSize: 12 }}>July 2018 - present</p>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div>
                      <a href="https://www.delltechnologies.com/en-ie/index.htm" target="_blank">
                        <img src={require('../../images/dellemc-logo.jpg')} style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10, marginBottom: 10 }} />
                      </a>
                      <p style={{ fontSize: 16 }}>Solution Architect</p>
                      <p style={{ fontSize: 14 }}>DellEMC</p>
                      <p style={{ fontStyle: 'italic', fontSize: 14 }}>Riyadh, Saudi Arabia</p>
                      <p style={{ fontStyle: 'italic', fontSize: 12 }}>October 2018 - present</p>
                    </div>
                  </Col>
                </Row>
                {/* <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p> */}
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
