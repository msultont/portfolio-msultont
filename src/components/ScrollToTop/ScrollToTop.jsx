/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-scroll';

const ScrollToTop = () => {
  return (
    <>
      <Link
        id="scroll-btn"
        className="sidebar-btns"
        to="hero"
        smooth
        duration={1000}
        title="Scroll to top"
      />
    </>
  );
};

export default ScrollToTop;
