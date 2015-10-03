var Asteroid = function(){

  var geometry = new THREE.Geometry();
  var material = new THREE.MeshPhongMaterial( { color: '#787878' } );
  var asteroid = new THREE.Mesh( geometry, material );


  var num_parts = 2 + Math.ceil( world.dice() * 6 );
  _.range(num_parts).forEach(function(){
    var diam = 10 + Math.ceil( world.dice() * 20 );
    var x = -30 + Math.ceil( world.dice() * 60 );
    var y = -30 + Math.ceil( world.dice() * 60 );
    var z = -30 + Math.ceil( world.dice() * 60 );

    var geometry = new THREE.SphereGeometry( diam, 16, 16 );

    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;

    asteroid.add(mesh);

  });









  return asteroid;
};


module.exports = Asteroid;
