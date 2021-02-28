import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStyleVariatsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${props => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${props => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${props =>
    get(props.theme, `colors.${props.variant}.color`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 16px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${TextStyleVariatsMap.smallestException}

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${props => {
    return props.ghost ? ButtonGhost : ButtonDefault;
  }}

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariatsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariatsMap.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
