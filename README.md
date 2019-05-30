# socket-io-chat

[![Build Status][build-status-img]][build-status-url] [![Dependency status][dependency-status-img]][dependency-status-url] [![Dev Dependency status][dev-dependency-status-img]][dev-dependency-status-url]

[build-status-url]:https://travis-ci.org/diogocapela/socket-io-chat
[build-status-img]:http://img.shields.io/travis/diogocapela/socket-io-chat/master.svg
[dependency-status-url]:https://david-dm.org/diogocapela/socket-io-chat
[dependency-status-img]:https://img.shields.io/david/diogocapela/socket-io-chat.svg
[dev-dependency-status-url]:https://david-dm.org/diogocapela/socket-io-chat?type=dev
[dev-dependency-status-img]:https://img.shields.io/david/dev/diogocapela/socket-io-chat.svg

A simple chat web application built using [Node.js](https://nodejs.org), [React](https://reactjs.org) and [Socket.io](https://socket.io).

**Live Demo:** [https://node-react-socket-io-chat.herokuapp.com](https://node-react-socket-io-chat.herokuapp.com)

## Folder Structure

```
├── public
│   ├── img
│   ├── robots.txt
│   ├── humans.txt
│   ├── manifest.json
│   └── sitemap.xml
├── src
│   ├── api
│   ├── components
│   ├── config
│   ├── pages
│   ├── redux
│   ├── socket
│   ├── styles
│   ├── test
│   ├── App.js
│   ├── index.js
│   ├── client.js
│   └── server.js
├── package-lock.json
├── package.json
└── razzle.config.js
```

## Setup

```bash
# Get the latest snapshot
$ git clone https://github.com/diogocapela/socket-io-chat.git

# Change directory
$ cd socket-io-chat

# Install all the dependencies
$ npm i

# Start the development server
$ npm run dev

# Build for production
$ npm run build

# Start the production server
$ npm run start
```

## Clean

```bash
# Deletes node_modules and package-lock.json
$ npm run clean
```

## Test

```bash
# Run all tests
$ npm run test
```

## Deploy

```bash
# Build project
$ npm run build

# Deploy
$ git push heroku master
```
