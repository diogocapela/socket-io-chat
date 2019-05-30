import React, { memo } from 'react';
import PropTypes from 'prop-types';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import styles from './ChatMessage.module.scss';

function ChatMessage({
  uid,
  username,
  content,
  timestamp,
}) {
  const stamp = new Date(timestamp);
  const year = stamp.getFullYear();
  const month = stamp.getMonth() + 1;
  const day = stamp.getDate();
  const hours = stamp.getHours() >= 10 ? stamp.getHours() : `0${stamp.getHours()}`;
  const minutes = stamp.getMinutes() >= 10 ? stamp.getMinutes() : `0${stamp.getMinutes()}`;
  const seconds = stamp.getSeconds() >= 10 ? stamp.getSeconds() : `0${stamp.getSeconds()}`;

  return (
    <div className={styles.wrapper}>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip id={'tooltip-right'}>
            <div className={styles.tooltip}>
              <strong>Date:</strong>
              <br />
              {`${day}/${month}/${year}`}
              <br />
              <strong>Time:</strong>
              <br />
              {`${hours}:${minutes}:${seconds}`}
            </div>
          </Tooltip>
        }>
        <span className={styles.timestamp}>{`${hours}:${minutes}:${seconds}`}</span>
      </OverlayTrigger>

      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip id={'tooltip-right'}>
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
        <span className={styles.username}>{`${username}:`}</span>
      </OverlayTrigger>
      <span className={styles.content}>{content}</span>
    </div>
  );
}

ChatMessage.propTypes = {
  uid: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

ChatMessage.defaultProps = {

};

export default memo(ChatMessage);
