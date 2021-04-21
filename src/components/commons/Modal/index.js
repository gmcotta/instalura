/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Button from '../Button';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  transition: 0.3s;
  z-index: 100;

  ${({ isOpen }) => {
    if (!isOpen) {
      return css`
        opacity: 0;
        pointer-events: none;
      `;
    }
    return css`
      opacity: 1;
      pointer-events: all;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Modal({
  isOpen, onClose, motionVariants, motionTransition, motionAnimate, children,
}) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        variants={motionVariants}
        transition={motionTransition}
        animate={motionAnimate}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  motionVariants: PropTypes.object.isRequired,
  motionTransition: PropTypes.object.isRequired,
  motionAnimate: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
};
