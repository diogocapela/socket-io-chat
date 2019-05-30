/* eslint-disable global-require */
/* eslint-disable no-console */
import http from 'http';

import socketIO from 'socket.io';
import socketServer from './socket/socket-server';

let app = require('./server').default;

const server = http.createServer(app);
const io = socketIO(server);
let currentApp = app;

socketServer(io);

server.listen(app.get('port'), (error) => {
  if (error) {
    console.log(error);
  }

  console.log('🚀 The server is running at http://localhost:%d in %s mode.', app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop.\n');
});

if (module.hot) {
  console.log('✅ Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁 HMR Reloading...');
    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
