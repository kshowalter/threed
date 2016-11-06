var t = THREE;

//import PointerLockControls as THREE.PointerLockControls from './modules/PointerLockControls'
var FirstPersonControls = require('./modules/FirstPersonControls');
THREE.FirstPersonControls = FirstPersonControls;
var OrbitControls = require('./modules/OrbitControls');
THREE.OrbitControls = OrbitControls;

var log = console.log.bind(console);
var version_string = "Dev";
//var version_string = "Alpha20140924";



//var _ = require('underscore');
//var moment = require('moment');
//var $ = require('jquery');
//var THREE = require('three');

var scene, camera, renderer;

//Var box_container = $('<div id="box"></div>').appendTo()
var box_container = document.createElement('div');
box_container.id = 'box';
document.body.appendChild (box_container);

var RENDER_WIDTH = window.innerWidth, RENDER_HEIGHT = window.innerHeight;

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var container, stats;
var camera, scene, renderer, mesh;
var cameraRig, activeCamera, activeHelper;
var cameraPerspective, cameraOrtho;
var cameraPerspectiveHelper, cameraOrthoHelper;

init();
render();

function init(){

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();

	//

	camera = new THREE.PerspectiveCamera( 50, 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
	camera.position.z = 2500;

	cameraPerspective = new THREE.PerspectiveCamera( 50, 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT, 150, 1000 );

	cameraPerspectiveHelper = new THREE.CameraHelper( cameraPerspective );
	scene.add( cameraPerspectiveHelper );

	//

	cameraOrtho = new THREE.OrthographicCamera( 0.5 * SCREEN_WIDTH / - 2, 0.5 * SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, 150, 1000 );

	cameraOrthoHelper = new THREE.CameraHelper( cameraOrtho );
	scene.add( cameraOrthoHelper );

	//



    // Three

    /*
    THREE.PerspectiveCamera.prototype.setRotateX = function( deg ) {
    if ( typeof( deg ) == 'number' && parseInt( deg ) == deg ){
    this.rotation.x = deg * ( Math.PI / 180 );
  }
  };
  THREE.PerspectiveCamera.prototype.setRotateY = function( deg ){
  if ( typeof( deg ) == 'number' && parseInt( deg ) == deg ){
  this.rotation.y = deg * ( Math.PI / 180 );
  }
  };
  THREE.PerspectiveCamera.prototype.setRotateZ = function( deg ){
  if ( typeof( deg ) == 'number' && parseInt( deg ) == deg ){
  this.rotation.z = deg * ( Math.PI / 180 );
  }
  };
  THREE.PerspectiveCamera.prototype.getRotateX = function(){
  return Math.round( this.rotation.x * ( 180 / Math.PI ) );
  };
  THREE.PerspectiveCamera.prototype.getRotateY = function(){
  return Math.round( this.rotation.y * ( 180 / Math.PI ) );
  };
  THREE.PerspectiveCamera.prototype.getRotateZ = function(){
  return Math.round( this.rotation.z * ( 180 / Math.PI ) );
  };

  //*/

  scene = new THREE.Scene();




  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );






  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //camera.rotation.order = "YXZ"; // CHANGED

  // Camera moves with mouse, flies around with WASD/arrow keys
  var controls = new THREE.FirstPersonControls(camera, renderer.domElement); // Handles camera control
  controls.movementSpeed = 1000;
  controls.lookSpeed = 0.125;
  controls.lookVertical = true;
  //controls.movementSpeed = MOVESPEED; // How fast the player can walk around
  //controls.lookSpeed = LOOKSPEED; // How fast the player can look around with the mouse
  //controls.lookVertical = false; // Don't allow the player to look up or down. This is a temporary fix to keep people from flying
  controls.noFly = true; // Don't allow hitting R or F to go up or down


  var controls = new THREE.OrbitControls(camera, renderer.domElement);

  camera.position.z = 5;

  scene.add( camera );











  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  var pointerOne = new THREE.PointLight(0xffffff);
  pointerOne.position.set(100,90,130);
  //pointerOne.position.set(0,0,130);

  scene.add( pointerOne );


  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshPhongMaterial( { color: 0x86c811 } );
  //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );


  var geometry = new THREE.BoxGeometry( 10, 1, 10 );
  var material = new THREE.MeshPhongMaterial( { color: 0xe4e4e4 } );
  //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var floor = new THREE.Mesh( geometry, material );
  floor.position.set(0,-2,0);
  scene.add( floor );





  renderer.domElement.style.backgroundColor = '#D6F1FF'; // Make it easier to see that the canvas was added. Also this is the sky color
  document.body.appendChild(renderer.domElement); // Add the canvas to the document




  //toBox( camera.getRotateX(), camera.getRotateY(), camera.getRotateZ() );

  });
  //*/
}



function render() {
  requestAnimationFrame( render );
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  //c_x += c_step;
  //if( c_x >= 2  ) c_x = 0;
  //cube.position.x = Math.sin( Math.PI * c_x ) * 2;

  renderer.render( scene, camera );

  //toBox( camera.getRotateX(), camera.getRotateY(), camera.getRotateZ() );

}
