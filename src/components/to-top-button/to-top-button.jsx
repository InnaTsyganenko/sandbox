import React from 'react';
import PropTypes from 'prop-types';
import {animateScroll as scroll} from 'react-scroll';

function ToTopButton({scrollState, setScrollState}) {
  function topFunction() {
    scroll.scrollToTop();
    setScrollState(false);
  }

  return (
    <button
      onClick={topFunction}
      className={scrollState ? 'to-top-button' : 'none'}
    ><span className="to-top-button_icon">&#9652;</span><br></br>UP
    </button>
  );
}

ToTopButton.propTypes = {
  scrollState: PropTypes.bool.isRequired,
  setScrollState: PropTypes.func.isRequired,
};

export default ToTopButton;
