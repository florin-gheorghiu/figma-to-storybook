import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

// Default theme
const defaultTheme = {
  dimension: {
    spacing: {
      2: '8px',
      3: '12px',
    },
    stroke: '1px',
    'stroke.focus': '2px',
  },
  size: {
    2: '8px',
  },
  input: {
    radius: '4px',
    label: {
      label: {
        fontfamily: 'Arial, sans-serif',
        size: '14px',
      },
    },
  },
  component: {
    input: {
      label: {
        label: {
          color: {
            default: '#333333',
          },
        },
      },
      stroke: {
        stroke: {
          default: '#CCCCCC',
          error: '#FF0000',
          disabled: '#EEEEEE',
          success: '#00FF00',
          focus: '#0000FF',
        },
      },
      bgrd: {
        colour: {
          default: '#FFFFFF',
          disable: '#F5F5F5',
        },
      },
    },
  },
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${props => props.theme.dimension.spacing[2]};
  width: 248px;
`;

const StyledLabel = styled.label`
  font-family: ${props => props.theme.input.label.label.fontfamily};
  font-size: ${props => props.theme.input.label.label.size};
  font-weight: 600;
  color: ${props => props.theme.component.input.label.label.color.default};
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 44px;
  padding: ${props => props.theme.size[2]} ${props => props.theme.dimension.spacing[3]};
  border-radius: ${props => props.theme.input.radius};
  border: ${props => props.theme.dimension.stroke} solid ${props => props.theme.component.input.stroke.stroke.default};
  background-color: ${props => props.theme.component.input.bgrd.colour.default};
  font-family: ${props => props.theme.input.label.label.fontfamily};
  font-size: ${props => props.theme.input.label.label.size};

  ${props => props.state === '__Error' && `
    border-color: ${props.theme.component.input.stroke.stroke.error};
  `}

  ${props => props.state === '__Disable' && `
    border-color: ${props.theme.component.input.stroke.stroke.disabled};
    background-color: ${props.theme.component.input.bgrd.colour.disable};
  `}

  ${props => props.state === '__Success' && `
    border-color: ${props.theme.component.input.stroke.stroke.success};
  `}

  ${props => props.state === '__Focus' && `
    border-width: ${props.theme.dimension.stroke.focus};
    border-color: ${props.theme.component.input.stroke.stroke.focus};
  `}
`;

const StyledMessage = styled.div`
  font-family: ${props => props.theme.input.label.label.fontfamily};
  font-size: ${props => props.theme.input.label.label.size};
  color: ${props => 
    props.state === '__Error' ? props.theme.component.input.stroke.stroke.error :
    props.state === '__Success' ? props.theme.component.input.stroke.stroke.success :
    props.theme.component.input.label.label.color.default
  };
`;

export const InputField = ({ label, placeholder, state, showMessage, message, onChange, testID }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InputWrapper data-testid={testID}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput 
          placeholder={placeholder}
          state={state}
          onChange={onChange}
          disabled={state === '__Disable'}
        />
        {showMessage && <StyledMessage state={state}>{message}</StyledMessage>}
      </InputWrapper>
    </ThemeProvider>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['__Default', '__Error', '__Disable', '__Success', '__Focus']),
  showMessage: PropTypes.bool,
  message: PropTypes.string,
  onChange: PropTypes.func,
  testID: PropTypes.string,
};

InputField.defaultProps = {
  state: '__Default',
  showMessage: false,
  placeholder: 'Placeholder',
  message: '',
};

export default InputField;