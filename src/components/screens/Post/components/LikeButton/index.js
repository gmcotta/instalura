import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../../../commons/Button';
import Text from '../../../../foundation/Text';
import LikeAnimation from '../../../Profile/components/LikeAnimation';

export const LikeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
        width="40px"
        height="24px"
      >
        <LikeAnimation
          isActive={isLikeActive}
        />
      </Button>
      <Text
        variant="smallestException"
        marginTop="0px"
        marginLeft="4px"
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
