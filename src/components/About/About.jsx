import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const {
    sulton,
    react,
    bootstrap,
    antd,
    python,
    node,
    mongodb,
    electron,
    vercel,
    heroku,
    left,
    right,
  } = about;

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
          <Col md={4} sm={8}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-title">
                  {left?.title ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <div id="frontend" className="about-wrapper__info-stack">
                  <p className="about-wrapper__info-stack-title">Frontend</p>
                  <div className="about-wrapper__info-stack-list">
                    <div>
                      <AboutImg alt="ant design" filename={antd} type="small" />
                      <p>Ant Design</p>
                    </div>
                    <div>
                      <AboutImg alt="reactJS" filename={react} type="small" />
                      <p>ReactJS</p>
                    </div>
                    <div>
                      <AboutImg alt="bootstrap" filename={bootstrap} type="small" />
                      <p>Bootstrap</p>
                    </div>
                  </div>
                </div>
                <div id="backend" className="about-wrapper__info-stack">
                  <p className="about-wrapper__info-stack-title">Backend</p>
                  <div className="about-wrapper__info-stack-list">
                    <div>
                      <AboutImg alt="python" filename={python} type="small" />
                      <p>Python</p>
                    </div>
                    <div>
                      <AboutImg alt="nodeJS" filename={node} type="small" />
                      <p>NodeJS</p>
                    </div>
                    <div>
                      <AboutImg alt="mongodb" filename={mongodb} type="small" />
                      <p>MongoDB</p>
                    </div>
                  </div>
                </div>
                <div id="deployment" className="about-wrapper__info-stack">
                  <p className="about-wrapper__info-stack-title">Deployment</p>
                  <div className="about-wrapper__info-stack-list">
                    <div>
                      <AboutImg alt="heroku" filename={heroku} type="small" />
                      <p>Heroku</p>
                    </div>
                    <div>
                      <AboutImg alt="Vercel" filename={vercel} type="small" />
                      <p>Vercel</p>
                    </div>
                  </div>
                </div>
                <div id="desktop" className="about-wrapper__info-stack">
                  <p className="about-wrapper__info-stack-title">Desktop</p>
                  <div className="about-wrapper__info-stack-list">
                    <div>
                      <AboutImg alt="electronJS" filename={electron} type="small" />
                      <p>ElectronJS</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
          <Col md={4} sm={8}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="muhammad sulton tauhid picture" filename={sulton} type="big" />
              </div>
              <span className="d-flex mt-3">
                <Link className="cta-btn cta-btn--resume" to="projects" smooth duration={1000}>
                  Click here to see my recent projects
                </Link>
              </span>
            </Fade>
          </Col>
          <Col md={4} sm={8}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {right?.paragraph ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  <b>Life motto</b> : an endless learner
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
