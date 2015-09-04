var c = require('../module/classes');
var Cycle = c.Cycle;

var controls = function(){
  //var world = this;

  var mode = Cycle(['walk','fly']);
  var controlled = world.agents['avatar'];

  var VIEW_INCREMENT = 1;        // amount to move in degrees


  var c_step = 0.01;
  var c_x = 0;

  var key_step = 0.03;

  var active_camera;
  var active_object;
  var active_control_mode = 'object';
  var active_control_modes = ['camera', 'objects'];

  var key_table = {
    38: 'up',
    40: 'down',
    37: 'left',
    39: 'right',
    87: 'w',
    65: 'a',
    83: 's',
    68: 'd',
    81: 'q',
    69: 'e',
    82: 'r',
    70: 'f',
    88: 'x',
    67: 'c',
    9: 'tab',
    16: 'shift',
    32: 'space',
    33: 'page_up',
    34: 'page_down',
    77: 'm',
  };
  var degrees, rads;

  var step = 0.25;

	document.addEventListener( 'keydown', function(e){key_press(e,'down');} );
	document.addEventListener( 'keyup',   function(e){key_press(e,'up'  );} );

  var key_press = function(e, key_action) {
    //log(e);
    //var key = e.which ? e.which : e.keyCode;
    var key_code = e.keyCode;
    var key_name = key_table[key_code];
    var state;

    if(key_name !== undefined){
      e.preventDefault();
      if( key_action === 'down') state = true;
      if( key_action === 'up')   state = false;

      if( world.controls.mode.get() === 'fly'){
        if( key_name === 'up' ) controlled.move.pitch_up = state;
        if( key_name === 'down' ) controlled.move.pitch_down = state;
        if( key_name === 'left' ) controlled.move.yaw_left = state;
        if( key_name === 'right' ) controlled.move.yaw_right = state;
        if( key_name === 'page_up' ) controlled.move.roll_left = state;
        if( key_name === 'page_down' ) controlled.move.roll_right = state;
        if( key_name === 'w' ) controlled.move.foward = state;
        if( key_name === 's' ) controlled.move.backward = state;
        if( key_name === 'a' ) controlled.move.left = state;
        if( key_name === 'd' ) controlled.move.right = state;
      }
      if( world.controls.mode.get() === 'walk'){
        if( key_name === 'up' ) controlled.move.pitch_up = state;
        if( key_name === 'down' ) controlled.move.pitch_down = state;
        if( key_name === 'left' ) controlled.move.yaw_left = state;
        if( key_name === 'right' ) controlled.move.yaw_right = state;
        if( key_name === 'page_up' ) controlled.move.roll_left = state;
        if( key_name === 'page_down' ) controlled.move.roll_right = state;
        if( key_name === 'w' ) controlled.move.foward = state;
        if( key_name === 's' ) controlled.move.backward = state;
        if( key_name === 'a' ) controlled.move.left = state;
        if( key_name === 'd' ) controlled.move.right = state;
      }


      if( key_action === 'down' && key_name === 'c' ) {
        world.camera_cycle.next();
      }
      if( key_action === 'down' && key_name === 'tab' ) {
        world.controls.mode.next();
      }

    }

  };






};

module.exports = controls;
