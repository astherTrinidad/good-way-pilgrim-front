import styled from 'styled-components'
import colors from '../../../assets/colors'

export const Input = styled.input`
  background: ${colors.white};
  border: ${props => (props.error && props.touched ? `2px solid ${colors.red}` : `2px solid ${colors.white}`)};
  border-radius: ${props => props.borderRadius};
  border-top: ${props => props.borderTop};
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  height: ${props => props.height};
  line-height: 10px;
  margin-top: 4px;
  opacity:0.6;
  padding: ${props => props.padding};
  transition: all 0.4s;
  width: 100%;

  :focus {
    border: 1px solid ${colors.white};
    box-shadow: ${props =>
      props.shadow ? props.shadow : '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)'};
      opacity:1;
    }

  &::placeholder {
    color: ${props => props.placeholderColor};
  }
`

export const Label = styled.label`
  border-radius: ${props => props.borderRadius};
  position: relative;
  width: 100%;

  .icon-input {
    bottom: 0;
    content: '';
    right: ${props => props.rightIcon};
    top: ${props => props.topIcon};
    position: absolute;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    font-size: 16px;
    text-align: left;
  }
`

export const Container = styled.div`
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  margin: ${props => (props.margin ? props.margin : '20px 0')};
  position: ${props => props.position};
  position: relative;
  width: ${props => props.width};
  @media (max-width: 1280px) {
    width: ${props => props.respWidth};
  }
`

export const ErrorContainer = styled.div`
  color: ${colors.white};
  font-size: 11px;
  text-align:right;
  padding: 5px 5px 0;
`
