import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';

function createTextThemeVariant(variantName) {
  return css`
    font-size: ${({ theme }) => theme.typographyVariants[variantName].fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants[variantName].fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants[variantName].lineHeight};
  `;
}

const smallestException = createTextThemeVariant('smallestException');
const title = createTextThemeVariant('title');
const titleXS = createTextThemeVariant('titleXS');
const subtitle = createTextThemeVariant('subtitle');
const paragraph1 = createTextThemeVariant('paragraph1');
const paragraph2 = createTextThemeVariant('paragraph2');

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
  ${propToStyle('textAlign')}
  ${({ theme, color }) => (color ? css`
    color: ${get(theme.colors, `${color}.color`)}
  ` : '')}
`;

export default function Text({
  tag, variant, children, ...rest
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase variant={variant} as={tag} {...rest}>{children}</TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'pagagraph1',
  textAlign: 'start',
  color: null,
};

Text.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
