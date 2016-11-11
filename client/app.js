var _ = window._ = require('lodash');
var seedrandom = require('seedrandom');
import Chance from 'chance';
var chance = Chance.Chance();

//import _ from 'lodash';

var THREE = require('three');

var camera_control = require('../lib/camera_control');
//var FirstPersonControls = require('./modules/FirstPersonControls');
//THREE.FirstPersonControls = FirstPersonControls;

//var Avatar = require('../lib/Avatar');
//var Cycle = require('../lib/Cycle');

var csg_k  = require('../lib/csg_k');
var functions  = require('../lib/functions');
var Avatar = require('../lib/Avatar');

var Ship  = require('../lib/world/Ship');
var World = require('../lib/world/World');

var mkWorldModel = require('../lib/model/mkWorldModel');

var g = {};
window.g = g;
window.f = functions;
window.THREE = THREE;
window.union = csg_k.union;
window.subtract = csg_k.subtract;
window.intersect = csg_k.intersect;


var socket = require('../lib/socket');
g.socket = socket;


var world = window.world = World();
world.point = {};
world.point.origin = new THREE.Vector3( 0, 0, 0 );
world.dice = seedrandom('phelow');

console.log('Welcome to the World ', world);
console.log( world.dice() );

//setInterval(function(){
//  world.do.save();
//}, 1000);

var scene = new THREE.Scene();

var ship = Ship();
scene.add(ship.model);

world.avatars.add( 'ship', Avatar(ship.model) );

var camera_observer = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
camera_observer.position.y = 20;
camera_observer.lookAt(world.point.origin);
world.cameras.add('observer', camera_observer);



import sector from '../lib/model/sector';
console.log(sector);

scene = mkWorldModel(scene);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// TEMP
world.cameras.next();
////////


function render() {
  requestAnimationFrame( render );

  world.avatars.get().update();
  renderer.render( scene, world.cameras.get() );
}

render();
