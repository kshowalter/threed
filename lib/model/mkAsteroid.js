var THREE = require('three');

var mkThreeGeometry = require('mkmkThreeGeometry');

var mkAsteroid = function(){

  var parts = [];
  var specs = {
    type: 'union',
    props: {},
    contains: []
  };

  var area_covered = {
    x: 100,
    y: 100,
    z: 100
  };

  var num_parts = 1 + Math.ceil( world.dice() * 2 );
  _.range(num_parts).forEach(function(){
    var diam = 10 + Math.ceil( world.dice() * 20 );
    var x = -area_covered.x/2 + Math.ceil( world.dice() * area_covered.x );
    var y = -area_covered.y/2 + Math.ceil( world.dice() * area_covered.y );
    var z = -area_covered.z/2 + Math.ceil( world.dice() * area_covered.z );

    var spec = {
      type: 'sphere',
      props: {
        diam: diam,
        x: x,
        y: y,
        z: z
      },
      contains: []
    };

    var geometry = mkThreeGeometry(spec);

    parts.push(geometry);
    //asteroid.add(mesh);


  });


  var asteroid = new THREE.Mesh( geometry, material );

  return asteroid;
};


module.exports = mkAsteroid;
