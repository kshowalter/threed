var Cycle = require('./Cycle');
//var controls = require('./controls.js');

class World {

  constructor() {
    this.cameras = {
      array: [],
      object: {},
      cycle: Cycle(),
    };
    this.actors = {};
    //camera_cycle: Cycle(),
    //this.controls = controls;
  };


  add(name, camera){
    this.array.push(camera);
    this.cycle.add(camera);
    this.object[name] = camera;
  };

};


module.exports = World;
