import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';

export function Link({ href, children, ...props }) {
  return <Text tag='a' variant='smallestException' href='https://google.com'>acesso ao google</Text>
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
