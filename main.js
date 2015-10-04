window._ = require('lodash');
var seedrandom = require('seedrandom');
//var t = THREE;

window.perm = sessionStorage;


var g = {};
window.g = g;

var camera_control = require('./module/camera_control');
//var FirstPersonControls = require('./modules/FirstPersonControls');
//THREE.FirstPersonControls = FirstPersonControls;

var Avatar = require('./module/Avatar');
//var Model = require('./module/Model');
var Cycle = require('./module/Cycle');

var Ship  = require('./module/Ship');
var World = require('./module/World');
var Asteroid  = require('./module/Asteroid');
var csg_k  = require('./module/csg_k');

window.union = csg_k.union;
window.subtract = csg_k.subtract;
window.intersect = csg_k.intersect;


window.world = World();

world.point = {};
world.point.origin = new THREE.Vector3( 0, 0, 0 );

world.dice = seedrandom('phelow');
console.log( world.dice() );





var scene, camera, renderer, controls;
var geometry, material, mesh;


//var test_model = Model();
//console.log(test_model);

window.rads = function(degrees){ return degrees*Math.PI*180;};

console.log('Welcome to the World ', world);

init();
render();

function init() {

  scene = new THREE.Scene();




  ship = Ship();
  scene.add(ship.model);
  world.avatars.add( 'ship', Avatar(ship.model) );






  camera_observer = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  camera_observer.position.y = 20;
  camera_observer.lookAt(world.point.origin);
  world.cameras.add('observer', camera_observer);

  var pointerOne = new THREE.PointLight(0xffffff);
  pointerOne.position.set(100,90,130);
  scene.add( pointerOne );
  pointerOne = new THREE.PointLight(0xffffff);
  pointerOne.position.set(-100,-90,-130);
  scene.add( pointerOne );




  _.range(10).forEach(function(){
    var asteroid = Asteroid();

    asteroid.position.x = -200 + Math.ceil( world.dice() * 400 );
    asteroid.position.y = -200 + Math.ceil( world.dice() * 400 );
    asteroid.position.z = -200 + Math.ceil( world.dice() * 400 );

    scene.add( asteroid );

  });


  /*




  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );



  var geometry= new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshPhongMaterial( { color: 0x86c811 } );
  //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  world.cameras.cube_camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  world.cameras.cube_camera.position.z = 2;
  world.cameras.cube_camera.position.y = 1.5;
  cube.add(world.cameras.cube_camera);
  world.camera_cycle.append(world.cameras.cube_camera);


  //var floor_geometry;
  //var floor_material;
  //var floor_mesh;
  //var floor_color;

  for( var i = 0; i<10; i++){

    var floor_color = new THREE.Color( 1-(i*1/10), 1-(i*1/10), 1-(i*1/10) );
    var floor_geometry = new THREE.BoxGeometry( 9, 0.5, 9 );
    var floor_material = new THREE.MeshPhongMaterial( { color: floor_color } );

    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(0,-2,i*10);
    scene.add( floor_mesh );
    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(0,-2,-i*10);
    scene.add( floor_mesh );
    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(i*10,-2,0);
    scene.add( floor_mesh );
    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(-i*10,-2,0);
    scene.add( floor_mesh );

    for( var c = 1; c<(i+1); c++){
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(c*10,-2,i*10);
      scene.add( floor_mesh );
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(-c*10,-2,i*10);
      scene.add( floor_mesh );
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(c*10,-2,-i*10);
      scene.add( floor_mesh );
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(-c*10,-2,-i*10);
      scene.add( floor_mesh );

      if( c<i) {
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(i*10,-2,c*10);
        scene.add( floor_mesh );
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(-i*10,-2,c*10);
        scene.add( floor_mesh );
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(i*10,-2,-c*10);
        scene.add( floor_mesh );
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(-i*10,-2,-c*10);
        scene.add( floor_mesh );

      }

    }

  }







  //camera.rotation.order = "YXZ"; // CHANGED

  // Camera moves with mouse, flies around with WASD/arrow keys
	//controls = new THREE.PointerLockControls( camera );

	//controls.movementSpeed = 1000;
	//controls.lookSpeed = 0.125;
	//controls.lookVertical = true;

  var cam = Actor(camera);
  cam.name = 'eye';
  var avi = Actor(cube);
  avi.name = 'eye';

  world.agents['avatar'] = avi;
  world.agents['camera'] = cam;


  world.camera_cycle.next();

  */
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

}

function render() {

  requestAnimationFrame( render );

  world.avatars.get().update();

  renderer.render( scene, world.cameras.get() );

}
