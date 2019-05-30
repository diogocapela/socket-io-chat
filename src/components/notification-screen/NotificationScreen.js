import React, { memo, useEffect } from 'react';
import renderHTML from 'react-render-html';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import socket from '@socket/socket-client';
import {
  NEW_ROOM_NOTIFICATION,
  NEW_GLOBAL_NOTIFICATION,
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from '@socket/eventTypes';

import 'react-notifications/lib/notifications.css';

function NotificationScreen() {
  const createNotification = ({ content, type }) => {
    switch (type) {
      case NOTIFICATION_TYPE_INFO: {
        NotificationManager.info('Info', <span>Success <b>{content}</b></span>);
        break;
      }
      case NOTIFICATION_TYPE_SUCCESS: {
        NotificationManager.success(<span>Success <b>message</b></span>, content);
        break;
      }
      case NOTIFICATION_TYPE_WARNING: {
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      }
      case NOTIFICATION_TYPE_ERROR: {
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          // eslint-disable-next-line no-alert
          alert('NOTIFICATION_TYPE_ERROR');
        });
        break;
      }
      default: {
        NotificationManager.info(renderHTML(content));
        break;
      }
    }
  };

  useEffect(() => {
    socket.on(NEW_ROOM_NOTIFICATION, (notification) => {
      createNotification(notification);
    });

    socket.on(NEW_GLOBAL_NOTIFICATION, (notification) => {
      createNotification(notification);
    });
  }, []);

  return <NotificationContainer />;
}


export default memo(NotificationScreen);
