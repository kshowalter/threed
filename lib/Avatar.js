//var Actor = require('./Actor');
var Physics = require('./world/Physics');
var Cycle = require('./Cycle');

var Avatar = function(model){
  var degrees = 90; //  degrees / second
  var step = 10;  // m/s

  var frame_frac = 1/60; // fraction of section for one frame;
  var rads = degrees*Math.PI/180;
  rads = rads*frame_frac;
  step = step*frame_frac;
  //var c_step = 0.01;
  //var c_x = 0;
  //var key_step = 0.03;


  //avatar_proto = Object.create(Actor());
  var avatar_proto = {};
  avatar_proto.physics = Physics();

  avatar_proto.key = function(key_name, key_action){
    var state;
    if( key_action === 'down') state = true;
    if( key_action === 'up')   state = false;

    if( this.mode.get() === 'ship'){
      if( key_name === 'w' ) this.move.foward = state;
      if( key_name === 's' ) this.move.backward = state;
      if( key_name === 'a' ) this.move.left = state;
      if( key_name === 'd' ) this.move.right = state;
      if( key_name === 'down' ) this.move.pitch_up = state;
      if( key_name === 'up' ) this.move.pitch_down = state;
      if( key_name === 'left' ) this.move.yaw_left = state;
      if( key_name === 'right' ) this.move.yaw_right = state;
      if( key_name === 'page_up' ) this.move.roll_left = state;
      if( key_name === 'page_down' ) this.move.roll_right = state;
      if( key_name === 'e' ) this.move.up = state;
      if( key_name === 'q' ) this.move.down = state;
    }
    if( this.mode.get() === 'fly'){
      if( key_name === 'down' ) this.move.pitch_up = state;
      if( key_name === 'up' ) this.move.pitch_down = state;
      if( key_name === 'left' ) this.move.yaw_left = state;
      if( key_name === 'right' ) this.move.yaw_right = state;
      if( key_name === 'page_up' ) this.move.roll_left = state;
      if( key_name === 'page_down' ) this.move.roll_right = state;
      if( key_name === 'w' ) this.move.foward = state;
      if( key_name === 's' ) this.move.backward = state;
      if( key_name === 'a' ) this.move.left = state;
      if( key_name === 'd' ) this.move.right = state;
    }
    if( this.mode.get() === 'walk'){
      if( key_name === 'up' ) this.move_camera.pitch_up = state;
      if( key_name === 'down' ) this.move_camera.pitch_down = state;
      if( key_name === 'left' ) this.move.yaw_left = state;
      if( key_name === 'right' ) this.move.yaw_right = state;
      if( key_name === 'page_up' ) this.move.up = state;
      if( key_name === 'page_down' ) this.move.down = state;
      if( key_name === 'w' ) this.move.foward = state;
      if( key_name === 's' ) this.move.backward = state;
      if( key_name === 'a' ) this.move.left = state;
      if( key_name === 'd' ) this.move.right = state;
    }
  };

  avatar_proto.update = function(){

    //if( this.move.rotate_up) this.model.rotation.x += rads;
    if(this.move.pitch_up) this.model.rotateY(+rads/2);
    //if(this.move.rotate_down) this.model.rotation.x += -rads;
    if(this.move.pitch_down) this.model.rotateY(-rads/2);
    //if(this.move.rotate_left) this.model.rotation.y += rads;
    if(this.move.yaw_left) this.model.rotateZ(+rads);
    //if(this.move.rotate_right) this.model.rotation.y += -rads;
    if(this.move.yaw_right) this.model.rotateZ(-rads);
    if(this.move.roll_left) this.model.rotateX(rads);
    if(this.move.roll_right) this.model.rotateX(-rads);

    if(this.move.foward) this.model.translateX(step);
    if(this.move.backward) this.model.translateX(-step);
    if(this.move.left) this.model.translateY(step);
    if(this.move.right) this.model.translateY(-step);
    if(this.move.up) this.model.translateZ(step);
    if(this.move.down) this.model.translateZ(-step);
  };

  avatar_proto.set_model = function(model){
    this.model = model;
  };


  var avatar = Object.create(avatar_proto);

  if( model ){
    avatar.model = model;
  }

  avatar.move = {};
  avatar.mode = Cycle(['ship', 'fly', 'walk']);


  return avatar;
};

module.exports = Avatar;
