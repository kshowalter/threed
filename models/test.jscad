var dtr = function(d){
  return d.map(function(diameter){
    return diameter/2;
  });
};

var hsq2 = Math.sqrt(2)/2;



function main(){
  var parts = [];
  parts.push( CSG.cube({radius:(dtr([1,1,1]))}).translate([50,5,0]) );

  var o = CSG.cube({
    radius: dtr([10,10,30]),
    center: [0,0,15],
  });

  var notch = intersection([
      CSG.cube({
        radius: dtr([10*hsq2,10*hsq2,10*hsq2]),
      })
      .translate( [10*hsq2/2,10*hsq2/2,-10*hsq2/2] )
      .rotateX(45)
      .rotateZ(-45),
      //CSG.cube({
      //    radius: dtr([4,4,4]),
      //    center: [0,0,-2],
      //})
    ]).translate([0,5,30]);

  var cuts = [];
  cuts.push( notch );
  cuts.push( notch.rotateZ(90) );
  cuts.push( notch.rotateZ(180) );
  cuts.push( notch.rotateZ(270) );

  level = {};
  level.height = 4;
  level.floor_height = 1;
  level.space_height = level.height - level.floor_height;

  cuts.push(
    CSG.cube({
      radius: dtr([9,9,level.space_height]),
    }).translate([0,0,level.space_height/2+1])
  )
  cuts.push(
    CSG.cube({
      radius: dtr([2,2,3]),
    }).translate([5,0,3/2+1])
  )


  //o = union( [o].concat(cuts) );

  //*
  cuts.forEach(function(cut){
    o = o.subtract(cut);
  });
  //*/

  o = o.union(
    CSG.cube({
      radius: dtr([hsq2,hsq2,1]),
      //center: [0,0,0.5]
    })
    .rotateZ(45)
    .translate([0,0,3])
  );

  //o = o.scale(10);

  parts.push(o);

  return union(parts);
}

if( typeof module !== 'undefined' ){
  module.exports = main;
}
