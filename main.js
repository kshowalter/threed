var t = THREE;

var camera_control = require('./module/camera_control');
//var FirstPersonControls = require('./modules/FirstPersonControls');
//THREE.FirstPersonControls = FirstPersonControls;

var Agent = require('./module/Agent');
var World = require('./module/World');
var c = require('./module/classes');
var Cycle = c.Cycle;

window.world = World();

world.agents = {};
world.cameras = {};
world.camera_cycle = Cycle();

world.controls = require('./module/controls.js');
world.controls();

var g = {};
window.g = g;

var scene, camera, renderer, controls;
var geometry, material, mesh;

var render;

init();
render();

function init() {

  scene = new THREE.Scene();

  world.point = {};
  world.point.origin = new THREE.Vector3( 0, 0, 0 );

  world.cameras.camera_observer = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  world.cameras.camera_observer.position.y = 20;
  world.cameras.camera_observer.lookAt(world.point.origin);
  world.camera_active = 'camera_observer';
  world.camera_cycle.append(world.cameras.camera_observer);



  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  var pointerOne = new THREE.PointLight(0xffffff);
  pointerOne.position.set(100,90,130);
  //pointerOne.position.set(0,0,130);

  scene.add( pointerOne );


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





  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );


  //camera.rotation.order = "YXZ"; // CHANGED

  // Camera moves with mouse, flies around with WASD/arrow keys
	//controls = new THREE.PointerLockControls( camera );

	//controls.movementSpeed = 1000;
	//controls.lookSpeed = 0.125;
	//controls.lookVertical = true;

  var cam = Agent(camera);
  cam.name = 'eye';
  var avi = Agent(cube);
  avi.name = 'eye';

  world.agents['avatar'] = avi;
  world.agents['camera'] = cam;


  world.camera_cycle.next();

  document.body.appendChild( renderer.domElement );

}

function render() {

  requestAnimationFrame( render );


  for( var agent_name in world.agents ){
    world.agents[agent_name].update();
  }

  renderer.render( scene, world.camera_cycle.get() );

}
