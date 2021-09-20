import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;
  const [_, setIsDesktop] = useState(false);
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
    <footer className="footer navbar-static-bottom">
      <Container>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <div className="footer__text">
          <span style={{ display: isMobile ? 'block' : 'inline' }}>
            © {new Date().getFullYear()}
          </span>
          <span hidden={isMobile ?? true}> - </span>
          <span style={{ display: isMobile ? 'block' : 'inline' }}>
            Portfolio developed by{' '}
            <a href="https://github.com/msultont" target="_blank" rel="noopener noreferrer">
              Sulton Wibawa
            </a>{' '}
          </span>
          <span hidden={isMobile ?? true}> | </span>
          <span style={{ display: isMobile ? 'block' : 'inline' }}>
            Base template by{' '}
            <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
              Jacobo Martínez
            </a>
          </span>
        </div>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
