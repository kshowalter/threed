var THREE = require('three');
var mkAsteroid  = require('./mkAsteroid');


var model = function(scene){


  var pointerOne = new THREE.PointLight(0xffffff);
  pointerOne.position.set(100,90,130);
  scene.add( pointerOne );
  var pointerTwo = new THREE.PointLight(0xffffff);
  pointerTwo.position.set(-100,-90,-130);
  scene.add( pointerTwo );


  _.range(5).forEach(function(){
    var asteroid = mkAsteroid();

    asteroid.position.x = -200 + Math.ceil( world.dice() * 400 );
    asteroid.position.y = -200 + Math.ceil( world.dice() * 400 );
    asteroid.position.z = -200 + Math.ceil( world.dice() * 400 );

    scene.add( asteroid );

  });

  return scene;
};

module.exports = model;
