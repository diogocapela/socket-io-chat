import React, { memo } from 'react';

import ChatUser from '@components/chat-user';

import styles from './ChatSidebar.module.scss';

function ChatSidebar({ users, room }) {
  const renderUser = ({ uid, username }, index) => (
    <li key={index}>
      <ChatUser
        uid={uid}
        username={username} />
    </li>
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.onlineUsers}>#{room}</h1>
      <h1 className={styles.onlineUsers}>Online Users ({users.length})</h1>
      <ul>
        {users.map(renderUser)}
      </ul>
    </div>
  );
}

export default memo(ChatSidebar);
