module.exports = io => {
  io.on('connection', (socket) => {
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
  })
}
