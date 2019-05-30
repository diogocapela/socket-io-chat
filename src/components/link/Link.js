import React from 'react';
import PropTypes from 'prop-types';
import { Link as NativeLink } from 'react-router-dom';

import noop from 'lodash/noop';
import isString from 'lodash/isString';

function Link({ children, to, title, onClick, toLocale, changeLanguage, target, keep, ...remainingProps }) {
    let validTitle = title;

    if (isString(children) && !title) {
        validTitle = children;
    }

    const handleClick = () => {
        if (!keep) {
            window.scrollTo(0, 0);
        }

        if (toLocale) {
            changeLanguage(toLocale);
        }

        onClick();
    };

    return target === '_blank' || !to || to.startsWith('mailto:') ? (
        <a
            aria-label={validTitle}
            title={validTitle}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            {...remainingProps}>{children}</a>
    ) : (
            <NativeLink
                aria-label={validTitle}
                title={validTitle}
                to={to}
                onClick={handleClick}
                {...remainingProps}>
                {children}
            </NativeLink>
        );
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    to: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    target: PropTypes.string,
    keep: PropTypes.bool,
};

Link.defaultProps = {
    onClick: noop,
    target: '_self',
    keep: false,
};

export default Link;
