import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: ${props => props.theme.input?.label?.label?.fontfamily || 'Arial, sans-serif'};
  font-size: ${props => props.theme.input?.label?.label?.size || '14px'};
  font-weight: 600;
  color: ${props => props.theme.component?.input?.label?.label?.color?.default || '#333333'};
`;

export const LabelText = ({ text, testID }) => {
  return <StyledLabel data-testid={testID}>{text}</StyledLabel>;
};

LabelText.propTypes = {
  text: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default LabelText;