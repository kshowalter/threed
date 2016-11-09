import io from 'socket.io-client';

var socket = io();

//g.path = __dirname;
console.log(window)
window.g.userId = false;

socket.on('connect', function(){
  var userId = sessionStorage.getItem('userId');
  console.log('iAm', userId);
  socket.emit('iAm', userId);

  socket.on('youAre', function(serveSaysUserId){
    if( userId !== serveSaysUserId ){
      userId = serveSaysUserId;
      sessionStorage.setItem('userId', userId);
      console.log('i am', userId);
    } else {
      console.log('userId confirmed');
    }

    g.userId = userId;
    socket.on('server_says', function(msg){
      console.log('server_says', msg);
    });

    //console.log('testing server communication');
    var number = chance.d20();
    //console.log('number:', number );
    //socket.emit('test', number);

    socket.emit('db_set', {
      userId: g.userId,
      doc: {
        status: 'this is a test',
        number: number
      }
    });
  });
});

export default socket;
