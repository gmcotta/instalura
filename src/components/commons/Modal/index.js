import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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
  overflow: scroll;

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

export default function Modal({isOpen, onClose, children }) {
  console.log
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
      {children({
        'data-modal-safe-area': 'true',
      })}
    </ModalWrapper>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
}
