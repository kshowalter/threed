var Pys = function(){
  var pys = {};

  return pys;

}; //require('');

var Agent = function(threejs_part){
  var agent = {};
  agent.pys = Pys();
  agent.actor = threejs_part;
  agent.move = {};

  var degrees = 90; //  degrees / second
  var step = 4;  // m/s

  var frame_frac = 1/60; // fraction of section for one frame;
  var rads = degrees*Math.PI/180;
  rads = rads*frame_frac;
  step = step*frame_frac;

  agent.update = function(){


    //if( this.move.rotate_up) agent.actor.rotation.x += rads;
    if( this.move.pitch_up) agent.actor.rotateX(+rads/2);
    //if( this.move.rotate_down) agent.actor.rotation.x += -rads;
    if( this.move.pitch_down) agent.actor.rotateX(-rads/2);
    //if( this.move.rotate_left) agent.actor.rotation.y += rads;
    if( this.move.yaw_left) agent.actor.rotateY(+rads);
    //if( this.move.rotate_right) agent.actor.rotation.y += -rads;
    if( this.move.yaw_right) agent.actor.rotateY(-rads);
    if( this.move.roll_left) agent.actor.rotateZ(-rads);
    if( this.move.roll_right) agent.actor.rotateZ(rads);

    if( this.move.foward) agent.actor.translateZ(-step);
    if( this.move.backward) agent.actor.translateZ(step);
    if( this.move.left) agent.actor.translateX(-step);
    if( this.move.right) agent.actor.translateX(step);
  };

  return agent;

};

module.exports = Agent;
