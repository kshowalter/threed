module.exports = function(camera){
  var camera_control = {};
  camera_control.camera = camera;

	var scope = this;



  // x increments, z depends of current y

  camera_control['move_left'] = function(){
    this.camera.position.y += 1;

  };
  camera_control['move_right'] = function(){
    this.camera.position.y += -1;

  };
  camera_control['move_forward'] = function(){
    this.camera.position.x += 1;

  };
  camera_control['move_back'] = function(){
    this.camera.position.x += -1;

  };

  camera_control['rotate_right'] = function(){
    this.camera.setRotateZ( this.camera.getRotateZ() + VIEW_INCREMENT );

  };

  camera_control['rotate_left'] = function(){
    this.camera.setRotateZ( this.camera.getRotateZ() - VIEW_INCREMENT );

  };


  camera_control['rotate_up'] = function(){
    if ( this.camera.getRotateX() > -90 ) {
      this.camera.setRotateX( this.camera.getRotateX() - VIEW_INCREMENT );
    }

  };

  camera_control['rotate_down'] = function(){
    this.camera.setRotateY( this.camera.getRotateY() + VIEW_INCREMENT );

  };


  return camera_control;
};
