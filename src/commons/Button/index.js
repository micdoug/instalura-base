import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextThemeVariants } from "../../components/Text";

const ButtonGhost = css`
  background: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  ${TextThemeVariants.smallestException}
`;

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  ${TextThemeVariants.smallestException}
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
`;