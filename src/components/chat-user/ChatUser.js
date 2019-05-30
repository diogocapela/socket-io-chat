import React, { memo } from 'react';
import PropTypes from 'prop-types';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Icon from '@components/icon';

import styles from './ChatUser.module.scss';

function ChatUser({ uid, username, tooltipPlacement }) {
  let usernameToRender = username;

  if (username.length > 20) {
    usernameToRender = `${username.substring(0, 20)} [...]`;
  }

  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      overlay={
        <Tooltip id={`tooltip-${tooltipPlacement}`}>
          <div className={styles.tooltip}>
            <strong>ID:</strong>
            <br />
            {uid}
            <br />
            <strong>Username:</strong>
            <br />
            {username}
          </div>
        </Tooltip>
      }>
      <div className={styles.wrapper}>
        <Icon slug="user" size="1rem" />
        <div className={styles.content}>{usernameToRender}</div>
      </div>
    </OverlayTrigger>
  );
}

ChatUser.propTypes = {
  uid: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tooltipPlacement: PropTypes.string,
};

ChatUser.defaultProps = {
  tooltipPlacement: 'right',
};

export default memo(ChatUser);
