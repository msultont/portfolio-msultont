import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hideHero, setHideHero] = useState('hidden');
  const [hideBtn, setHideBtn] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      setHideHero('hidden');
      setHideBtn(true);
    });

    const timeout = setTimeout(() => {
      setHideHero('visible');
      setHideBtn(false);
    }, 1600);

    return () => {
      window.removeEventListener('beforeunload', () => {
        setHideHero('hidden');
        setHideBtn(true);
      });
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="hero" className="jumbotron" style={{ visibility: hideHero }}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1500} delay={1650} distance="30px">
          <h1 className="hero-title">
            Hi, my name is <span className="text-color-main">Sulton</span>
            <br />
            I&apos;m a fullstack software developer
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1500} delay={1650} distance="30px">
          <p className="hero-cta" hidden={hideBtn}>
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                Click me to know more
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
