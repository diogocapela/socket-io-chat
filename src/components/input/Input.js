import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';

import styles from './Input.module.scss';

function Input({
  label,
  type,
  focus,
  onChange,
  onFocus,
  onBlur,
  required,
  disabled,
  theme,
  innerRef,
  ...remainingProps
}) {
  return (
      <input
        ref={innerRef}
        className={classNames(styles.wrapper, theme.wrapper)}
        type={type}
        focused={focus}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={label}
        {...remainingProps} />
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    wrapper: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string,
  }),
};

Input.defaultProps = {
  type: 'text',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  required: false,
  disabled: false,
  theme: {},
};

export default Input;
