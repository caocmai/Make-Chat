//app.js
const express = require('express');
const app = express();
const server = require('http').Server(app);


//Socket.io
const io = require('socket.io')(server);
io.on("connection", (socket) => {
  console.log("🔌 New user connected! 🔌");
  require('./sockets/chat.js')(io, socket);

})


//Express View Engine for Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: "" })); // to fix handlebar not found set defaultLayout: ""
app.set('view engine', 'handlebars');

//Establish your public folder
app.use('/public', express.static('public'))


app.get('/', (req, res) => {
   console.log("jaskldfjlaksdjlfk")
  res.render('index.handlebars');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})