//import THREE from 'three';
var THREE = require('three');
var mkAsteroid  = require('../mkAsteroid');

var sector = function(){
  var baseSector = [];

  _.range(5).forEach(function(){
    var asteroid = mkAsteroid();

    asteroid.position.x = -200 + Math.ceil( world.dice() * 400 );
    asteroid.position.y = -200 + Math.ceil( world.dice() * 400 );
    asteroid.position.z = -200 + Math.ceil( world.dice() * 400 );

    baseSector.push(asteroid);
  });


  return baseSector;
};


module.exports = sector;
