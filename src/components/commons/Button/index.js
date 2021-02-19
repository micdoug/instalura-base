import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextThemeVariants } from "../../foundation/Text";
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from "../../../theme/utils/propToStyle";

const ButtonGhost = css`
  background: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => ghost ? ButtonGhost : ButtonDefault}
  &:hover,  &:focus {
    opacity: .5;
  }
  ${breakpointsMedia({
  xs: css`
      ${TextThemeVariants.smallestException}
    `,
  md: css`
      ${TextThemeVariants.paragraph1}
    `
})}
  ${propToStyle('margin')}
  ${propToStyle('display')}
`;