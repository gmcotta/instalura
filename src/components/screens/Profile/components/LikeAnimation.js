import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

import heartAnimation from '../animations/heart.json';

export default function LikeAnimation({ isActive }) {
  const [animationState, setAnimationState] = useState({
    direction: -1,
    isStopped: true,
    isPaused: false,
  });

  useEffect(() => (isActive ? setAnimationState({
    ...animationState,
    direction: 1,
    isStopped: false,
    isPaused: false,
  }) : setAnimationState({
    ...animationState,
    isStopped: true,
  })), [isActive]);

  return (
    <Lottie
      options={{
        animationData: heartAnimation,
        loop: false,
        autoplay: false,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      isPaused={animationState.isPaused}
      isStopped={animationState.isStopped}
      direction={animationState.direction}

    />
  );
}

LikeAnimation.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
