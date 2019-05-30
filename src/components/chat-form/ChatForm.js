import React, { memo, useState } from 'react';

import socket from '@socket/socket-client';
import {
  NEW_ROOM_CLIENT_MESSAGE,
} from '@socket/eventTypes';

import styles from './ChatForm.module.scss';

function ChatForm({ room }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (inputMessage.length > 0) {
      socket.emit(NEW_ROOM_CLIENT_MESSAGE, {
        message: inputMessage,
        room,
      });
      setInputMessage('');
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmitClick}>
      <input
        value={inputMessage}
        className={styles.input}
        type="text"
        placeholder="Enter a chat message"
        required
        onChange={e => setInputMessage(e.target.value)}
        onFocus={() => { }}
        autoFocus={true}
        onBlur={() => { }}
        aria-label="Send a Message"
        tabIndex="1" />

      <button
        className={styles.button}
        type="submit">
        Send
      </button>

    </form>
  );
}

export default memo(ChatForm);
