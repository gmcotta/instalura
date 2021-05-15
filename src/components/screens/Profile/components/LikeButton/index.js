import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';
import Button from '../../../../commons/Button';
import Text from '../../../../foundation/Text';
import LikeAnimation from '../LikeAnimation';

export const LikeButtonWrapper = styled.div`
  display: flex;
  ${breakpointsMedia({
    xs: css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `,
    md: css`
      flex-direction: column;
    `,
  })}
`;

export default function LikeButton({
  onClick, isLikeActive, likeQuantity,
}) {
  return (
    <LikeButtonWrapper>
      <Button
        ghost
        fontSize="0"
        padding="0px"
        onClick={onClick}
        width={{ xs: '40px', md: '80px' }}
        height={{ xs: '24px', md: '80px' }}
      >
        <LikeAnimation
          isActive={isLikeActive}
        />
      </Button>
      <Text
        variant="smallestException"
        marginTop={{ xs: '0px', md: '8px' }}
        marginLeft={{ xs: '4px', md: '0px' }}
      >
        {likeQuantity}
      </Text>

    </LikeButtonWrapper>
  );
}

LikeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLikeActive: PropTypes.bool.isRequired,
  likeQuantity: PropTypes.number.isRequired,
};
