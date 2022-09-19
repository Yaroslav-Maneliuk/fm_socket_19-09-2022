module.exports = {
  port: 5000,
  db: {
    development: {
      host: "localhost",
      port: 27017,
      database: "fm_socket",
    },
    test: {
      host: "localhost",
      port: 27017,
      database: "fm_socket",
    },
  },
  SOCKET_EVENTS: {
    NEW_MESSAGE: "NEW_MESSAGE",
    NEW_MESSAGE_ERROR: "NEW_MESSAGE_ERROR",
  },
};
