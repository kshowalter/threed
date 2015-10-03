 var Ship = function(){
  var ship = {};


  var cube_geometry = new THREE.CubeGeometry( 10, 5, 5 );


  //var sphere_geometry = new THREE.SphereGeometry( 10, 16, 16 );
  //sphere_geometry.possition.x = 5;

  //var sphere_bsp = new ThreeBSP( sphere_geometry );
  //var cube_bsp = new ThreeBSP( cube_geometry );
  //var union_bsp = sphere_bsp.union( cube_bsp );

  //var result = union_bsp.toMesh( new THREE.MeshLambertMaterial({ shading: THREE.SmoothShading, map: //THREE.ImageUtils.loadTexture('texture.png') }) );


  //ship.model = 	result.geometry.computeVertexNormals();

  var material = new THREE.MeshPhongMaterial( { color: '#1d3d1c' } );




  var ship_model = new THREE.Mesh( cube_geometry, material );








  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 3.5;
  camera.position.x = 3;
  camera.lookAt( new THREE.Vector3(100,0,2) );
  camera.rotateZ(-90*Math.PI/180);
  ship_model.add(camera);

  world.cameras.add('ship', camera);















  ship.model = ship_model;

  return ship;

};

module.exports = Ship;
