import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  ${propToStyle('marginBottom')};
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.error.main.color};

    & + span {
      color: ${theme.colors.error.main.color};
      font-size: 11px;
    }
  `}
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        {...props}
      />
      {
        isFieldInvalid && (
          <Text
            variant="smallestException"
            color="error.main"
            role="alert"
          >
            {error}
          </Text>
        )
      }
    </InputWrapper>
  );
}

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

TextField.defaultProps = {
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};
