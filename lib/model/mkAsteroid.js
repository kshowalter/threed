var THREE = require('three');

var mkAsteroid = function(){


  var parts = [];

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

    var geometry = new THREE.SphereGeometry( diam, 16, 16);
    geometry.translate(x,y,z);

    //var mesh = new THREE.Mesh( geometry, material );
    //mesh.position.x = x;
    //mesh.position.y = y;
    //mesh.position.z = z;

    parts.push(geometry);
    //asteroid.add(mesh);


  });


  //var geometry = new THREE.Geometry();
  var geometry = union(parts);
  var material = new THREE.MeshLambertMaterial( { color: '#787878' } );

  var geometryObj = geometry.toJSON();
  var geometryJSON = JSON.stringify(geometryObj);
  var jsonObj = JSON.parse(geometryJSON);
  var loader = new THREE.JSONLoader();
  var geometry = loader.parse( jsonObj.data ).geometry;

  //var materialObj = material.toJSON();
  //var materialJSON = JSON.stringify(materialObj);
  //var jsonObj = JSON.parse(materialJSON);
  //var loader = new THREE.JSONLoader();
  //console.log(jsonObj)
  //var material = loader.parse( jsonObj );
  //console.log(material)



  var asteroid = new THREE.Mesh( geometry, material );


  return asteroid;
};


module.exports = mkAsteroid;
