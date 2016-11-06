

 var Ship = function(){
  var ship = {};

  var dim = {
    l1: 10,
    w1: 5,
    h1: 5,
  };

  var hull_block1 = new THREE.CubeGeometry( 10, 5, 5 );
  var hull_block2 = new THREE.CubeGeometry( 15, 10, 1 )
    //hull_block2.center(10,5,5);

  var strut5 = new THREE.CubeGeometry(5, 0.5, 0.5);
  var strut10 = new THREE.CubeGeometry(10, 0.5, 0.5);

  var hull = union(
    strut10.clone().translate(0, 2.5-0.25, 2.5-0.25),
    strut10.clone().translate(0, 2.5-0.25, -2.5-0.25),
    strut10.clone().translate(0, -2.5-0.25, 2.5-0.25),
    strut10.clone().translate(0, -2.5-0.25, -2.5-0.25),
    strut5.clone().translate((dim.l1-0.5)/2, 0,  (dim.w1-0.5)/2).rotateZ(rads(90)),
    strut5.clone().translate((dim.l1-0.5)/2, 0, -(dim.w1-0.5)/2).rotateZ(rads(90)),
    strut5.clone().translate((dim.l1-0.5)/2,  (dim.w1-0.5)/2, 0).rotateY(rads(90)),
    strut5.clone().translate((dim.l1-0.5)/2, -(dim.w1-0.5)/2, 0).rotateY(rads(90))
  );
  //var sphere_geometry = new THREE.SphereGeometry( 10, 16, 16 );
  //sphere_geometry.possition.x = 5;

  //var sphere_bsp = new ThreeBSP( sphere_geometry );
  //var cube_bsp = new ThreeBSP( cube_geometry );
  //var union_bsp = sphere_bsp.union( cube_bsp );

  //var result = union_bsp.toMesh( new THREE.MeshLambertMaterial({ shading: THREE.SmoothShading, map: //THREE.ImageUtils.loadTexture('texture.png') }) );


  //ship.model = 	result.geometry.computeVertexNormals();

  var material = new THREE.MeshPhongMaterial( { color: '#1d3d1c' } );




  var ship_model = new THREE.Mesh( hull, material );








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
