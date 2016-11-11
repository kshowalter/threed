var THREE = require('three');
var csg_k  = require('../csg_k');
var union = csg_k.union;
import f from '../functions';

var Ship = function(scene){
  var ship = {};

  var dim = {
    container: {
      w: 5
    },
    strut5: {
      w: 0.5,
      l: 5
    }
  };

  dim.frame = {
    w: dim.container.w - dim.strut5.w
  };

  var strut5 = new THREE.BoxGeometry(dim.strut5.l, dim.strut5.w, dim.strut5.w);

  dim.strut5.offset = {};
  dim.strut5.offset.w = dim.container.w/2 - dim.strut5.w/2;
  dim.strut5.offset.l = dim.container.l/2 - dim.strut5.w/2;

  dim.hullPlate = {};
  dim.hullPlate.w = dim.frame.w - dim.strut5.w;
  dim.hullPlate.t = dim.strut5.w/4;

  var hullPlate = new THREE.BoxGeometry( dim.hullPlate.w, dim.hullPlate.w, dim.hullPlate.t );

  var sheet = new THREE.BoxGeometry( 6, 6, 0.001 );
  //hull_block2.center(10,5,5);


  var cubeFrame = union(
    strut5.clone().rotateZ(f.rads(90)).translate( dim.frame.w/2, 0,  dim.frame.w/2),
    strut5.clone().rotateZ(f.rads(90)).translate( dim.frame.w/2, 0, -dim.frame.w/2),
    strut5.clone().rotateZ(f.rads(90)).translate(-dim.frame.w/2, 0,  dim.frame.w/2),
    strut5.clone().rotateZ(f.rads(90)).translate(-dim.frame.w/2, 0, -dim.frame.w/2),
    strut5.clone().rotateZ(f.rads(90)).translate( dim.frame.w/2, 0,  dim.frame.w/2).rotateZ(f.rads(90)),
    strut5.clone().rotateZ(f.rads(90)).translate( dim.frame.w/2, 0, -dim.frame.w/2).rotateZ(f.rads(90)),
    strut5.clone().rotateZ(f.rads(90)).translate(-dim.frame.w/2, 0,  dim.frame.w/2).rotateZ(f.rads(90)),
    strut5.clone().rotateZ(f.rads(90)).translate(-dim.frame.w/2, 0, -dim.frame.w/2).rotateZ(f.rads(90)),
    strut5.clone().rotateZ(f.rads(90)).translate( dim.frame.w/2, 0,  dim.frame.w/2).rotateX(f.rads(90)),
    strut5.clone().rotateZ(f.rads(90)).translate( dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(90)),
    strut5.clone().rotateZ(f.rads(90)).translate(-dim.frame.w/2, 0,  dim.frame.w/2).rotateX(f.rads(90)),
    strut5.clone().rotateZ(f.rads(90)).translate(-dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(90)),

    //hullPlate.clone().rotateY(f.rads(90)).translate(-dim.strut5.offset.l, 0, 0),
    //hullPlate.clone().rotateX(f.rads(90)).translate(dim.frame.w/2, dim.frame.w/2, 0),
    //sheet.clone().rotateY(f.rads(90)),
    //sheet.clone().rotateY(f.rads(90)).translate(dim.frame.w, 0, 0),
    //sheet.clone().rotateY(f.rads(90)).translate(dim.frame.w/2, 0, 0)
  );

  var hull = union(
    cubeFrame.clone().translate( dim.container.w/2,0,0),
    cubeFrame.clone().translate(-dim.container.w/2,0,0),
    hullPlate.clone().rotateY(f.rads(90)).translate(-dim.strut5.w/2-dim.frame.w, 0, 0),
    hullPlate.clone().translate(-dim.strut5.w/2-dim.frame.w/2, 0, -dim.frame.w/2),
    hullPlate.clone().translate(-dim.strut5.w/2-dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(90)),
    hullPlate.clone().translate(-dim.strut5.w/2-dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(180)),
    hullPlate.clone().translate(-dim.strut5.w/2-dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(270)),
    //hullPlate.clone().rotateX(f.rads(90)).translate(-dim.strut5.w/2-dim.frame.w/2, +dim.frame.w/2, 0),
    //hullPlate.clone().rotateX(f.rads(90)).translate(-dim.strut5.w/2-dim.frame.w/2, -dim.frame.w/2, 0).rotateY(f.rads(90)),
    //hullPlate.clone().rotateX(f.rads(90)).translate(-dim.strut5.w/2-dim.frame.w/2, +dim.frame.w/2, 0).rotateY(f.rads(90)),
  );
  //var sphere_geometry = new THREE.SphereGeometry( 10, 16, 16 );
  //sphere_geometry.possition.x = 5;

  var hullMaterial = new THREE.MeshPhongMaterial( { color: '#1d3d1c' } );

  var ship_model = new THREE.Mesh( hull, hullMaterial );



  //var sphere_bsp = new ThreeBSP( sphere_geometry );
  //var cube_bsp = new ThreeBSP( cube_geometry );
  //var union_bsp = sphere_bsp.union( cube_bsp );
  var glass = new THREE.MeshLambertMaterial( {
    color: '#b5d5ff',
    transparent: true,
    opacity: 0.1
  });

  var pane = function(){

    var plate = new THREE.BoxGeometry( dim.hullPlate.w, dim.hullPlate.w, dim.hullPlate.t );

    var pane = new THREE.Mesh( plate, glass );

    ship_model.add(pane);
    return pane.geometry;
  };

  //var pane1 = pane().translate(dim.strut5.w/2+dim.frame.w/2, 0, -dim.frame.w/2);
  pane().rotateY(f.rads(90)).translate(dim.strut5.w/2+dim.frame.w, 0, 0);
  pane().translate(dim.strut5.w/2+dim.frame.w/2, 0, -dim.frame.w/2);
  pane().translate(dim.strut5.w/2+dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(90));
  pane().translate(dim.strut5.w/2+dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(180));
  pane().translate(dim.strut5.w/2+dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(270));
  //hullPlate.clone().translate(-dim.strut5.w/2-dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(90)),
  //hullPlate.clone().translate(-dim.strut5.w/2-dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(180)),
  //hullPlate.clone().translate(-dim.strut5.w/2-dim.frame.w/2, 0, -dim.frame.w/2).rotateX(f.rads(270)),
  //var result = union_bsp.toMesh( new THREE.MeshLambertMaterial({ shading: THREE.SmoothShading, map: //THREE.ImageUtils.loadTexture('texture.png') }) );

  //ship.model = 	result.geometry.computeVertexNormals();


  //var texture = new THREE.TextureLoader().load( 'textures/crate.gif' );
  //var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
  //var material = new THREE.MeshBasicMaterial( { map: texture } );
  //var mesh = new THREE.Mesh( geometry, material );

  var camera = new THREE.PerspectiveCamera( 74, window.innerWidth / window.innerHeight, 1, 10000 );
  //camera.position.z = 3.5;
  //camera.position.x = 3;
  //camera.lookAt( new THREE.Vector3(100,0,2) );
  //camera.rotateZ(-90*Math.PI/180);
  camera.lookAt( new THREE.Vector3(100,0,0) );
  camera.rotateZ(f.rads(-90));
  ship_model.add(camera);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set(dim.frame.w/2, dim.frame.w/2, dim.frame.w/2);
  spotLight.target.position.set(dim.frame.w, dim.frame.w/2, dim.frame.w/2);
  spotLight.angle = 0.1;
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.near = 50;
  spotLight.shadow.camera.far = 40000;
  spotLight.shadow.camera.fov = 30;

  ship_model.add(spotLight);
  ship_model.add(spotLight.target);

  world.cameras.add('ship', camera);

  ship.model = ship_model;

  return ship;

};

module.exports = Ship;
