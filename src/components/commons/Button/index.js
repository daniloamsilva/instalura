import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 16px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  transition: opacity ${({theme}) => theme.transition};
  border-radius: ${({theme}) => theme.borderRadius};
  
  ${ (props) => { return props.ghost ? ButtonGhost : ButtonDefault } }

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;