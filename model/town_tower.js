var town_tower = function(){
  var tower = Model({
    color: 'red',
    material: 'flat',

    shape: {
      type: 'cube',
      dimetions: [10,10,30],
      center: [0,0,0]
    },
    add: [
      {
        type: 'cube',
        dimetions: [5,5,10],
        center: [0,0,35]
      },
    ],
    subtract: [
      {
        type: 'cube',
        dimetions: [3,10,3],
        center: [0,0,1.5]
      },


    ],


  });



  export tower;
}



var main = function(){
  return town_tower().toCSG();
}
module.exports = town_tower;
