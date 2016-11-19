var THREE = require('three');
var mkBaseSector = require('./base');

var sector = function(){
  var baseSector = mkBaseSector();

  var pointerOne = new THREE.PointLight(0xffffff);
  pointerOne.position.set(100,90,130);
  var pointerTwo = new THREE.PointLight(0xffffff);
  pointerTwo.position.set(-100,-90,-130);

  baseSector.push(pointerOne);
  baseSector.push(pointerTwo);

  return baseSector;
};

module.exports =  sector;
