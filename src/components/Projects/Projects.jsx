/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Link } from 'react-scroll';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, projectDate, projectTech, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">
                          <b>Project Duration: </b>
                          {projectDate || ''}
                        </p>
                        <div className="project-wrapper__text-techs mb-4">
                          <p className="mr-2">
                            <b>Technology: </b>
                          </p>
                          {projectTech.map(({ alt, techUrl, filename }, key) => (
                            <a
                              key={key}
                              href={techUrl || '#!'}
                              target="_blank"
                              aria-label="Project Link"
                              rel="noopener noreferrer"
                            >
                              <Tilt options={{ max: 8, reset: true, scale: 1.25 }}>
                                <div className="thumbnail rounded mr-2">
                                  <ProjectImg
                                    alt={alt}
                                    filename={filename}
                                    type={isMobile ? 'small20' : 'small50'}
                                  />
                                </div>
                              </Tilt>
                            </a>
                          ))}
                        </div>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          See Live
                        </a>
                      )}
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            url === ''
                              ? 'cta-btn cta-btn--source_code text-color-main'
                              : 'cta-btn text-color-main'
                          }
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      {typeof img === 'string' ? (
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} type="big" />
                          </div>
                        </Tilt>
                      ) : (
                        <Carousel slide>
                          {img.map((filename, key) => (
                            <Carousel.Item
                              key={key}
                              interval={Math.floor(Math.random() * (5500 - 2500 + 1) + 2500)}
                            >
                              <Tilt
                                options={{
                                  reverse: false,
                                  max: 8,
                                  perspective: 1000,
                                  scale: 1,
                                  speed: 300,
                                  transition: true,
                                  axis: null,
                                  reset: true,
                                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                                }}
                              >
                                <div data-tilt className="thumbnail rounded">
                                  <ProjectImg alt={title} filename={filename} type="big" />
                                </div>
                              </Tilt>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      )}
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
          <span className="d-flex mt-3 justify-content-center">
            <Link className="cta-btn cta-btn--projects" to="footer" smooth duration={1000}>
              Click here to next page
            </Link>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
