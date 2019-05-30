import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faAd, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faAndroid,
    faAppStore,
    faAppStoreIos,
    faApple,
    faFacebook,
    faFacebookF,
    faFacebookMessenger,
    faFacebookSquare,
    faGoogle,
    faGooglePlay,
    faInstagram,
    faLinkedin,
    faLinkedinIn,
    faPinterest,
    faPinterestP,
    faPinterestSquare,
    faTwitch,
    faTwitter,
    faTwitterSquare,
    faYoutube,
    faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    /* free-solid-svg-icons */
    faCube,
    faAd,
    /* free-regular-svg-icons */
    faUser,
    /* free-brands-svg-icons */
    faAndroid,
    faAppStore,
    faAppStoreIos,
    faApple,
    faFacebook,
    faFacebookF,
    faFacebookMessenger,
    faFacebookSquare,
    faGoogle,
    faGooglePlay,
    faInstagram,
    faLinkedin,
    faLinkedinIn,
    faPinterest,
    faPinterestP,
    faPinterestSquare,
    faTwitch,
    faTwitter,
    faTwitterSquare,
    faYoutube,
    faYoutubeSquare,
);

function Icon({ slug, size, isBrand, ...remainingProps }) {
    return (
        <FontAwesomeIcon
            icon={isBrand ? ['fab', slug] : slug}
            fixedWidth
            style={{ fontSize: size }}
            {...remainingProps} />
    );
}

Icon.propTypes = {
    slug: PropTypes.string,
    size: PropTypes.string,
    isBrand: PropTypes.bool,
};

Icon.defaultProps = {
    slug: 'cube',
    size: '2rem',
    isBrand: false,
};

export default Icon;
