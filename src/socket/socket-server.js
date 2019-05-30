/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
const {
    USER_JOINED_ROOM,
    UPDATE_USERS_IN_ROOM,
    NEW_ROOM_CLIENT_MESSAGE,
    NEW_GLOBAL_SERVER_MESSAGE,
    NEW_ROOM_SERVER_MESSAGE,
    NEW_ROOM_NOTIFICATION,
    NEW_GLOBAL_NOTIFICATION,
    NOTIFICATION_TYPE_INFO,
    NOTIFICATION_TYPE_SUCCESS,
} = require('./eventTypes');

const __ONLINE_USERS__ = {
    /*
    thisistheid: {
        uid: 'thisistheid',
        username: 'This is the id',
    }
    */
};
const __USERS_IN_ROOM__ = {
    /* roomSlug: new Set('id_1', 'id_2'), */
};

const __joinRoom = (uid, room) => {
    if (!__USERS_IN_ROOM__[room]) {
        __USERS_IN_ROOM__[room] = new Set();
    }
    __USERS_IN_ROOM__[room].add(uid);
};

const __leaveRoom = (uid, room) => {
    __USERS_IN_ROOM__[room].delete(uid);
};

const __changeUsername = (uid, username) => {
    if (__ONLINE_USERS__[uid]) {
        __ONLINE_USERS__[uid].username = username;
    }
};

function User({ uid, username }) {
    this.uid = uid;
    this.username = username;
}

function Message({ content, uid }) {
    this.content = content;
    this.uid = uid;
    this.username = __ONLINE_USERS__[uid] ? __ONLINE_USERS__[uid].username : uid;
    this.timestamp = Date.now();
}

function Notification({ content }) {
    this.content = content;
    this.timestamp = Date.now();
}

export default (io) => {
    io.on('connection', (socket) => {
        // Utility functions
        // ======================================================
        function emitToRoom__updateUsers(room) {
            // sending to all clients in the room, including sender
            io.in(room).emit(UPDATE_USERS_IN_ROOM, {
                users: [...__USERS_IN_ROOM__[room]].map(uid => new User({
                    uid,
                    username: __ONLINE_USERS__[uid].username,
                })),
            });
        }

        function emitToRoom__newClientMessage(room, uid, content) {
            // sending to all clients in the room, including sender
            io.in(room).emit(NEW_ROOM_CLIENT_MESSAGE, new Message({
                content,
                uid,
            }));
        }

        function emitToRoom__newServerMessage(room, content) {
            // sending to all clients in the room, including sender
            io.in(room).emit(NEW_ROOM_SERVER_MESSAGE, new Message({
                content,
                uid: 'SERVER',
            }));
        }

        function emitToGlobal__newServerMessage(content) {
            // sending to all clients, including sender
            io.emit(NEW_GLOBAL_SERVER_MESSAGE, new Message({
                content,
                uid: 'SERVER',
            }));
        }

        function emitToRoom__newNotification(room, content) {
            // sending to all clients in the room, including sender
            io.in(room).emit(NEW_ROOM_NOTIFICATION, new Notification({
                content,
                room,
                type: NOTIFICATION_TYPE_INFO,
            }));
        }

        function emitToGlobal__newNotification(content) {
            // sending to all clients, including sender
            io.emit(NEW_GLOBAL_NOTIFICATION, new Notification({
                content,
                type: NOTIFICATION_TYPE_SUCCESS,
            }));
        }

        // Socket Connected
        // ======================================================
        __ONLINE_USERS__[socket.id] = new User({
            uid: socket.id,
            username: socket.id,
        });
        const msg = `The socket with ID <b>${socket.id}</b> just joined the server.`;
        emitToGlobal__newServerMessage(msg);
        emitToGlobal__newNotification(msg);

        // Socket Disconnected
        // ======================================================
        socket.on('disconnect', () => {
            delete __ONLINE_USERS__[socket.id];
            for (const room in __USERS_IN_ROOM__) {
                if (__USERS_IN_ROOM__.hasOwnProperty(room)) {
                    if (__USERS_IN_ROOM__[room].has(socket.id)) {
                        __leaveRoom(socket.id, room);
                        emitToRoom__updateUsers(room);
                        const message = `The socket with ID <b>${socket.id}</b> left the room <b>#${room}</b>.`;
                        emitToRoom__newServerMessage(room, message);
                        emitToRoom__newNotification(room, message);
                    }
                }
            }
            emitToGlobal__newServerMessage(`The socket with ID <b>${socket.id}</b> has left the <b>server</b>.`);
        });

        // Socket Joined Room
        // ======================================================
        socket.on(USER_JOINED_ROOM, ({ room }) => {
            socket.join(room);
            __joinRoom(socket.id, room);
            emitToRoom__updateUsers(room);
            const message = `The socket with ID <b>${socket.id}</b> joined the room <b>#${room}</b>.`;
            emitToRoom__newServerMessage(room, message);
            emitToRoom__newNotification(room, message);
        });


        // Socket Sent a Room Message
        // ======================================================
        socket.on(NEW_ROOM_CLIENT_MESSAGE, ({ room, message }) => {
            emitToRoom__newClientMessage(room, socket.id, message);
        });
    });
};
