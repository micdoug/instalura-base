import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function _createTextThemeVariant(variantName) {
  return css`
    font-size: ${({ theme }) => theme.typographyVariants[variantName].fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants[variantName].fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants[variantName].lineHeight};
  `;
}

const smallestException = _createTextThemeVariant("smallestException");
const title = _createTextThemeVariant("title");
const titleXS = _createTextThemeVariant("titleXS");
const subtitle = _createTextThemeVariant("subtitle");
const paragraph1 = _createTextThemeVariant("paragraph1");
const paragraph2 = _createTextThemeVariant("paragraph2");

export const TextThemeVariants = {
  smallestException,
  title,
  titleXS,
  subtitle,
  paragraph1,
  paragraph2,
};

const TextBase = styled.span`
  ${({ variant }) => TextThemeVariants[variant]}
`;

export function Text({ tag, variant, children, ...rest }) {
  return (
    <TextBase variant={variant} as={tag} {...rest}>{children}</TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'pagagraph1',
};

Text.propTypes = {
  tag: PropTypes.elementType.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}