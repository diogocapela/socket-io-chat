/* eslint-disable no-unused-expressions */
import React, { Fragment, useState, useEffect } from 'react';

import ChatSidebar from '@components/chat-sidebar';
import ChatMessage from '@components/chat-message';
import ChatForm from '@components/chat-form';

import socket from '@socket/socket-client';
import {
  NEW_ROOM_CLIENT_MESSAGE,
  UPDATE_USERS_IN_ROOM,
  NEW_ROOM_SERVER_MESSAGE,
  NEW_GLOBAL_SERVER_MESSAGE,
  USER_JOINED_ROOM,
} from '@socket/eventTypes';

import styles from './Chat.module.scss';

function Chat({ match: { params: { slug } } }) {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit(USER_JOINED_ROOM, {
      room: slug,
    });

    socket.on(UPDATE_USERS_IN_ROOM, ({ users: u }) => {
      setUsers(u);
    });

    socket.on(NEW_ROOM_SERVER_MESSAGE, (message) => {
      setMessages(prev => [...prev, message]);
    });

    socket.on(NEW_GLOBAL_SERVER_MESSAGE, (message) => {
      setMessages(prev => [...prev, message]);
    });

    socket.on(NEW_ROOM_CLIENT_MESSAGE, (message) => {
      setMessages(prev => [...prev, message]);
    });
  }, [slug]);

  useEffect(() => {
    // Update scroll on new messages
    const chat = document.getElementById('chat');
    chat && chat.scrollTo(0, chat.scrollHeight);
  }, [messages]);


  const renderMessage = ({ content, username, uid, timestamp }, index) => (
      <li className={styles.message} key={index}>
        <ChatMessage
          content={content}
          username={username}
          uid={uid}
          timestamp={timestamp} />
      </li>
    );

  return (
    <Fragment>
      <main className={styles.wrapper}>
        <aside className={styles.aside}>
          <ChatSidebar users={users} room={slug} />
        </aside>
        <article className={styles.chat} id="chat">
          <ul>
            {messages.map(renderMessage)}
          </ul>
        </article>
      </main>
      <ChatForm room={slug} />
    </Fragment>
  );
}


export default Chat;
