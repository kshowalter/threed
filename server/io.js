var chance = require('chance').Chance();
var updateAvatar = require('./updateAvatar');


module.exports = function(server, dbs){
  var io = require('socket.io')(server);
  io.on('connection', function(socket){
    console.log('connection', socket.id);

    socket.on('iAm', function(givenUserId){
      var user = dbs.test.get('users', {'userId': givenUserId})[0];
      var userId = '';
      var filterObj;

      //console.log('-iAm-', givenUserId, user );
      // new user:                           ! givenUserId && ! user.id
      if( ! givenUserId && ! user ){
        userId = chance.hash({length: 10});
        // user with non-existant user name    givenUserId && ! user.id
      } else if( givenUserId && ! user ) {
        userId = chance.hash({length: 10});
        // existing user                       givenUserId && user.id
      } else if( givenUserId && user ) {
        userId = user.userId;
        filterObj = { userId: userId };
      }

      //console.log('connection', socket.id, 'is', userId);

      socket.emit('youAre', userId);


      dbs.test.set('users', {
        userId: userId,
        socetId: socket.id
      }, filterObj);
    });



    socket.on('test', function(input){
      //console.log('test: ', input);
      io.emit('server_says', 'test, your input is: ' + input);
    });

    socket.on('db_set', function(submitted){
      console.log('---db_set---');

      var user = dbs.test.get('users', {'socetId': socket.id})[0];

      var doc = Object.assign({}, submitted.doc, {
        userId: user.userId
      });
      console.log('doc', doc);
      dbs.test.set('testArray', doc);


    });

    socket.on('db_get', function(){
      console.log('test');
      io.emit('server_says', 'test');
    });

    socket.on('updateAvatar', function(update){
      var user = dbs.test.get('users', {
        socetId: socket.id
      });

      //console.log('user: ', socket.id, user[0].userId);

      updateAvatar(update);
    });



    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

  });
};
