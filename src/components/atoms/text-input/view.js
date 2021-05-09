import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, ErrorContainer, Container } from './styled';

const TextInput = ({
  id,
  placeholder,
  topIcon,
  rightIcon,
  value,
  onChange,
  Icon,
  width,
  respWidth,
  height,
  refProp,
  borderRadius,
  onKeyDown,
  margin,
  onFocus,
  onBlur,
  padding,
  background,
  name,
  error,
  position,
  bottom,
  left,
  borderTop,
  shadow,
  type,
  label,
  touched,
  disabled,
}) => (
  <Container
    margin={margin}
    width={width}
    respWidth={respWidth}
    position={position}
    bottom={bottom}
    left={left}
  >
    <Label
      htmlFor={label}
      background={background}
      borderRadius={borderRadius}
      topIcon={topIcon}
      rightIcon={rightIcon}
    >
      {label && <p>{label}:</p>}
      <Input
        id={id}
        onKeyDown={onKeyDown}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={refProp}
        borderRadius={borderRadius}
        borderTop={borderTop}
        onFocus={onFocus}
        onBlur={onBlur}
        padding={padding}
        height={height}
        name={name}
        error={error}
        shadow={shadow}
        type={type}
        touched={touched}
        disabled={disabled}
      />
      <Icon className="icon-input" />
    </Label>
    {error && touched && <ErrorContainer>{error}</ErrorContainer>}
  </Container>
);

TextInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  width: PropTypes.string,
  respWidth: PropTypes.string,
  refProp: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  borderRadius: PropTypes.string,
  borderTop: PropTypes.string,
  onKeyDown: PropTypes.func,
  topIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  margin: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  padding: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  position: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  shadow: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  id: '',
  placeholder: '',
  placeholderColor: '',
  value: undefined,
  onChange: () => {},
  Icon: () => <></>,
  width: '100%',
  respWidth: '',
  refProp: () => {},
  borderRadius: '8px',
  borderTop: '',
  onKeyDown: () => {},
  rightIcon: '1rem',
  topIcon: '1.5rem',
  margin: '',
  onFocus: () => {},
  onBlur: () => {},
  padding: '0.75rem',
  background: '',
  height: '',
  name: '',
  error: '',
  position: '',
  bottom: '',
  left: '',
  shadow: '',
  type: '',
  label: '',
  touched: false,
  disabled: false,
};

export default TextInput;
