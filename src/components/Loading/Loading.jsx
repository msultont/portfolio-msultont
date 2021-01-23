import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Loading = () => {
  const [loadingTimeout, setLoadingTimeout] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingTimeout(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideLoading(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="loading" hidden={hideLoading}>
      <Container>
        <Fade when={loadingTimeout}>
          <ReactLoading className="m-auto" type="spin" color="#0195d8" height={128} width={128} />
        </Fade>
      </Container>
    </section>
  );
};

export default Loading;
