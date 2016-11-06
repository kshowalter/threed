// title      : OpenJSCAD.org Logo
// author     : Rene K. Mueller
// license    : MIT License
// revision   : 0.003
// tags       : Logo,Intersection,Sphere,Cube
// file       : logo.jscad



function main() {
  var core = CSG.cube([1,1,1]);
  core = core.translate([0,0,1]);


  var layer = [];
  layer[-1] = [
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
  ];
  layer[0] = [
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
  ];
  layer[1] = [
    [1,0,0,0,1],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
  ];
  layer[2] = [
    [1,0,0,0,1],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
  ];
  layer[3] = [
    [1,0,0,0,1],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
  ];
  layer[4] = [
    [1,0,0,0,1],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
  ];

  to_join = [];

  for( var z in layer){
    for( var y in layer[z]){
      for( var x in layer[z][y]){
        var location = layer[z][y][x];
        if(location){
          to_join.push( cube().translate([x,y,z]) );
        }
      }
    }
  }

  var tower = union(to_join);
  /*
  return union(
  difference(
  cube({size: 3, center: true}),
  sphere({r:2, center: true})
),
intersection(
sphere({r: 1.3, center: true}),
cube({size: 2.1, center: true})
)
).translate([0,0,1.5]).scale(10);
*/
  return tower;
}

if( typeof module !== 'undefined' ){
  module.exports = main;
}
