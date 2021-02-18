import theme from "../index";
import { css } from 'styled-components';

export default function breakpointsMedia(cssInBreakpoints) {
  return (Object.keys(cssInBreakpoints).filter(breakpoint => breakpoint in theme.breakpoints)
    .map(breakpoint => css`
    @media screen and (min-width: ${theme.breakpoints[breakpoint]}px) {
      ${cssInBreakpoints[breakpoint]}
    }
  `))
}