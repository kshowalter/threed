
var mk_model = function(){
  var dtr = function(d){
    return d.map(function(diameter){
      return diameter/2;
    });
  };

  var hsq2 = Math.sqrt(2)/2;
  var parts = [];
  var cuts = [];


  var t = {};



  t.section = [];

  t.section[0] = {};
  t.section[1] = {};
  t.section[2] = {};
  t.section[3] = {};
  t.section[4] = {};

  t.section[0].height = 10;

  t.section[1].foundation = {};
  t.section[1].foundation.width = 12;
  t.section[1].foundation.height = 1;
  t.section[1].height = t.section[1].foundation.height;
  t.section[1].width = t.section[1].foundation.width;

  var level = {};
  level.height = 4.0;
  level.floor_height = 1;
  level.space_height = level.height - level.floor_height;

  t.section[2].height = level.height * 4;
  t.section[2].width = 10;
  t.section[2].width_inner = t.section[2].width - 2;

  t.section[3].height = hsq2 * t.section[2].width / 2;
  t.section[3].width = t.section[2].width;
  t.section[3].width_inner = t.section[3].width - 2;

  t.section[4].height = level.height * 3;
  t.section[4].width = hsq2*t.section[3].width;  // rotated width
  t.section[4].width_inner = t.section[4].width - 2;

  t.section[0].base = -10;
  t.section[1].base = t.section[0].base + t.section[0].height;
  t.section[2].base = t.section[1].base + t.section[1].height;
  t.section[3].base = t.section[2].base + t.section[2].height;
  t.section[4].base = t.section[3].base + t.section[3].height;
  //t.section[5].base = t.section_base[4] + t.section_height[4];

  t.section[1].center = t.section[1].base + t.section[1].height/2;
  t.section[2].center = t.section[2].base + t.section[2].height/2;
  t.section[3].center = t.section[3].base + t.section[3].height/2;
  t.section[4].center = t.section[4].base + t.section[4].height/2;

  var z = 0;



////////////////////
// tower section 1

  parts.push(
    CSG.cube({
      radius: dtr([ t.section[1].width, t.section[1].width, t.section[1].height ]),
      center: [ 0, 0, t.section[1].center ],
    })
  );

////////////////////
// tower section 2

  parts.push(
    CSG.cube({
      radius: dtr([ t.section[2].width, t.section[2].width, t.section[2].height ]),
      center: [ 0, 0, t.section[2].center ],
    })
  );
  z = t.section[2].base + level.space_height/2; // move to center of first floor
  for( var i=0; i<=3; i++){
    cuts.push(
      CSG.cube({
        radius: dtr([ t.section[2].width_inner, t.section[2].width_inner, level.space_height ]),
        center: [ 0, 0, z ],
      })//.translate([ 0, 0, z ])
    );
    z += level.height;
  }

////////////////////
// tower section 3

  parts.push(
    CSG.cube({
      radius: dtr([ t.section[3].width, t.section[3].width, t.section[3].height ]),
      center: [ 0, 0, t.section[3].center ],
    })
  );

  var notch = CSG.cube({
      radius: dtr([ t.section[3].width*hsq2, t.section[3].width*hsq2, t.section[3].width*hsq2 ]),
    })
    .translate( [ t.section[3].width*hsq2/2, t.section[3].width*hsq2/2, -t.section[3].width*hsq2/2] )
    .rotateX(45)
    .rotateZ(-45)
    .translate([ 0, 5, t.section[4].base ]);
  cuts.push( notch );
  cuts.push( notch.rotateZ(90) );
  cuts.push( notch.rotateZ(180) );
  cuts.push( notch.rotateZ(270) );

  var model = union(parts).subtract(cuts); parts = []; cuts = []; // assemble model


  z = t.section[3].base + level.space_height/2; // move to center of first floor
  var notch2 = CSG.cube({
        radius: dtr([ t.section[3].width*hsq2, t.section[3].width*hsq2, t.section[3].width*hsq2 ]),
      })
      .translate( [ t.section[3].width*hsq2/2, t.section[3].width*hsq2/2, -t.section[3].width*hsq2/2] )
      .rotateX(45)
      .rotateZ(-45)
      .subtract(CSG.cube({
        radius: dtr([ 42, 42, 42 ]),
        center: [ 0, 0, 21 ],
      }))
      .translate([ 0, 5, t.section[4].base ])
      .translate([ -1, -1,  ]);

  cuts.push(
    CSG.cube({
      radius: dtr([ t.section[2].width_inner, t.section[2].width_inner, level.space_height ]),
      center: [ 0, 0, z ],
    })//.translate([ 0, 0, z ])
    .subtract(
      union([
        notch2,
        notch2.rotateZ(90),
        notch2.rotateZ(180),
        notch2.rotateZ(270),
      ])
    )
  );

////////////////////
// tower section 4

  /*

  parts.push(
    CSG.cube({
      radius: dtr([ t.section[4].width, t.section[4].width, t.section[4].height ]),
      center: [ 0, 0, t.section[4].center ]
    })
    .rotateZ(45)
  );


  z = t.section[4].base + level.space_height/2; // move to center of first floor
  for( var i=0; i<=3; i++){
    cuts.push(
      CSG.cube({
        radius: dtr([ t.section[4].width_inner, t.section[4].width_inner, level.space_height ]),
        center: [ 0, 0, z ],
      })//.translate([ 0, 0, z ])
      .rotateZ(45)
    );
    z += level.height;
  }


  model = union([model].concat(parts)).subtract(cuts); parts = []; cuts = []; // assemble model

  cuts.push(
    CSG.cube({
      radius: dtr([2,2,3]),
    }).translate([5,0,3/2+1])
  );


  */
  //*
  //parts.forEach(function(cut){
  //  foundation = foundation.subtract(cut);
  //});
  //cuts.forEach(function(cut){
  //  foundation = foundation.subtract(cut);
  //});
  //*/


  //o = o.scale(10);

  //parts.push(foundation);

  // section TEMPORARY
  cuts.push(
    CSG.cube({
      radius: dtr([100,100,100]),
      center: [-50,-50,50],
    })
  );
  // section TEMPORARY

  model = union([model].concat(parts)).subtract(cuts); parts = []; cuts = []; // assemble model


  return {
    csg: model,
    three: false,
  };

};



function main(){
  return mk_model().csg;
}

if( typeof module !== 'undefined' ){
  module.exports = mk_model;
}
