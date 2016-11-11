

var updateUniverse = function(db){

  var secOne = {
    id: '0.0.0',
    contents: [
      'ship',
      'asteroid'
    ]
  };
  console.log('secOne', secOne)
  db.set('sectors', secOne);
};

module.exports = updateUniverse;
