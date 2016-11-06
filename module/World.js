var Cycle = require('./Cycle');
var Controls = require('./Controls');

var World = function(){
  console.log('Creating a world');
  var world = Object.create({
    world_instance: this,
    do: {
      save: function(){
        world_instance.avatars.array.forEach(function(avatar){
          console.log(avatar);
        })

        perm
      },
    },
  });
  world.constructor = function() {
    this.cameras = Cycle();
    this.actors = Cycle();
    this.avatars = Cycle();
    //camera_cycle: Cycle(),
    this.controls = Controls();
    this.controls.init(this);
  };

  world.constructor();





  return world;
};

module.exports = World;
