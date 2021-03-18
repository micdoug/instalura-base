import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import theme from '../../../../theme';

const Container = styled.div`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;

  ${breakpointsMedia({
    xs: css`
      max-width: initial;
      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
  `,
  })}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

const Column = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }
    if (typeof value === 'object') {
      const dynamicCss = {};
      const breakpointsToConsider = Object.keys(value)
        .filter((breakpoint) => breakpoint in theme.breakpoints);
      breakpointsToConsider.forEach((breakpoint) => {
        const breakpointValue = value[breakpoint];
        dynamicCss[breakpoint] = css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * breakpointValue) / 12}%;
          max-width: ${(100 * breakpointValue) / 12}%;
        `;
      });
      return breakpointsMedia(dynamicCss);
    }
    return '';
  }}

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    if (typeof offset === 'object') {
      const breakpointsToConsider = Object.keys(offset)
        .filter((breakpoint) => breakpoint in theme.breakpoints);
      const dynamicCss = {};
      breakpointsToConsider.forEach((breakpoint) => {
        dynamicCss[breakpoint] = css`
          margin-left: ${(100 * offset[breakpoint]) / 12}%;
        `;
      });
      return breakpointsMedia(dynamicCss);
    }
    return '';
  }}
`;

export default {
  Container,
  Row,
  Column,
};
