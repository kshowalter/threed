var Cycle = require('./Cycle');

var mk_controls = function(){
  //var world = this;

  var VIEW_INCREMENT = 1;        // amount to move in degrees




  //var active_camera;
  //var active_object;
  //var active_control_mode = 'object';
  //var active_control_modes = ['camera', 'objects'];

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


  var control = {};

  control.init = function(world){
    var control_object = this;
    this.world = world;
  	document.addEventListener( 'keydown', function(e){control_object.key_press(e,'down');} );
  	document.addEventListener( 'keyup',   function(e){control_object.key_press(e,'up'  );} );

  };


  //control.mode = Cycle(['ship','fly','walk']);

  control.key_press = function(e, key_action) {
    //log(e);
    //var key = e.which ? e.which : e.keyCode;
    var key_code = e.keyCode;
    var key_name = key_table[key_code];
    var state;
    var controlled = this.world.avatars.get();

    if(key_name !== undefined){
      e.preventDefault();


      if( key_action === 'down' && key_name === 'c' ) {
        world.cameras.next();
      }
      if( key_action === 'down' && key_name === 'tab' ) {
        controlled.mode.next();
      }
      else {
        controlled.key(key_name, key_action);
      }

    }

  };


  return control;

};

module.exports = mk_controls;
