import { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Container.module.scss';

function Container({ children, className, tag }) {
  return createElement(
    tag,
    { className: classNames(styles.wrapper, className) },
    [children],
  );
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Container.defaultProps = {
  tag: 'div',
};

export default Container;
