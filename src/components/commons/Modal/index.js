import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const BoxWrapper = styled.div`
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: autoscroll;

  ${({ isOpen }) => {
    console.log(`isOpen ${isOpen}`);
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
        opacity: 0;
        pointer-events: none;
      `;
  }}
`;

export default function Modal({ isOpen, onClose, children }) {
  return (
    <BoxWrapper
      isOpen={isOpen}
      onClick={(event) => {
        if (event.target.attributes['data-modal-close-area']) {
          onClose();
        }
      }}
      data-modal-close-area="true"
    >
      {children}
    </BoxWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
