import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import isString from 'lodash/isString';

import Link from '@components/link';

import styles from './Button.module.scss';

function Button({
  children,
  to,
  target,
  onClick,
  disabled,
  fullWidth,
  theme,
}) {
  const title = isString(children) ? children : null;

  const renderButton = () => (
    <button
      className={classNames(styles.wrapper, { [styles.fullWidth]: fullWidth }, theme.wrapper)}
      onClick={onClick}
      disabled={disabled}
      aria-label={title}>
      {children}
    </button>
  );

  const renderButtonWithLink = () => (
    <Link to={to} target={target} title={title} className={styles.link}>
      {renderButton()}
    </Link>
  );

  return to ? renderButtonWithLink() : renderButton();
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  to: PropTypes.string,
  target: PropTypes.string,
  keep: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    wrapper: PropTypes.string,
  }),
};

Button.defaultProps = {
  to: null,
  target: '_self',
  keep: false,
  onClick: noop,
  disabled: false,
  fullWidth: false,
  theme: {},
};

export default Button;
