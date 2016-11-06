
var Model = function(specs){
  /*
  part = {
    type: [cube,extrution,group,..],
    specs: {
      location: [],
      center: [],
    },

  }
  part = {
    type: [group,..],
    specs: {
      add: [
        part1,
        part2,
      ],
      remove: [
        part3,
        part4,
      ],
    },
  }
  */

  //var model = {};
  //model.type = type;
  //model.specs = specs;

var model = Object.create({

    add: function(part){
      this.specs.add.push(part);
    },
    remove: function(part){
      this.specs.remove.push(part);
    },
    location: function(x,y,z){
      this.specs.location = { x:x, y:y, z:z };
    },
    center: function(dx,dy,dz){
      this.specs.center = { dx:dx, dy:dy, dz:dz };
    },
    get_model: function(){
      if( this.type === 'block' ){
        this.specs.add.forEach(function(part){
            console.log(part);
        });
      } else if( this.type === 'cube' ) {
        this.geometry = new THREE.BoxGeometry( this.specs.location.x, this.specs.location.y, this.specs.location.z  );
      }

    },
  })


  /*
  ,{
    type: 'group',
    specs: {
      add: [],
      remove: [],
    },
    geometry: null,

  });
  */



  if( typeof THREE !== 'undefined' ){




  } else {
    console.error('No renderer available');
  }



  return model;
};

module.exports = Model;
