var Actor = function(threejs_part){
  var actor = {};
  actor.pys = Pys();
  actor.actor = threejs_part;
  actor.move = {};
  actor.move_camera = {};

  var degrees = 90; //  degrees / second
  var step = 10;  // m/s

  var frame_frac = 1/60; // fraction of section for one frame;
  var rads = degrees*Math.PI/180;
  rads = rads*frame_frac;
  step = step*frame_frac;

  actor.update = function(){


    //if( this.move.rotate_up) actor.actor.rotation.x += rads;
    if(this.move.pitch_up) actor.actor.rotateY(+rads/2);
    //if(this.move.rotate_down) actor.actor.rotation.x += -rads;
    if(this.move.pitch_down) actor.actor.rotateY(-rads/2);
    //if(this.move.rotate_left) actor.actor.rotation.y += rads;
    if(this.move.yaw_left) actor.actor.rotateZ(+rads);
    //if(this.move.rotate_right) actor.actor.rotation.y += -rads;
    if(this.move.yaw_right) actor.actor.rotateZ(-rads);
    if(this.move.roll_left) actor.actor.rotateX(rads);
    if(this.move.roll_right) actor.actor.rotateX(-rads);

    if(this.move.foward) actor.actor.translateX(-step);
    if(this.move.backward) actor.actor.translateX(step);
    if(this.move.left) actor.actor.translateY(-step);
    if(this.move.right) actor.actor.translateY(step);
    if(this.move.up) actor.actor.translateZ(step);
    if(this.move.down) actor.actor.translateZ(-step);
  };


  avatar_proto.key = function(key_name, action){


    if( key_action === 'down') state = true;
    if( key_action === 'up')   state = false;

    if( control.mode.get() === 'fly'){
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
    if( control.mode.get() === 'walk'){
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



  return actor;

};

module.exports = Actor;
