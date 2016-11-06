var ThreeBSP = window.ThreeBSP;


var csg_k = {
  union: function(input){
    var base_geometry;
    var other_geometry;

    if( input.constructor === Array ) {
      base_geometry = input[0];
      other_geometry = input.slice(1);
    } else {
      base_geometry = input;
      other_geometry = Array.prototype.slice.call(arguments).slice(1);
    }

    base_geometry2 = new ThreeBSP(base_geometry);
    other_geometry.forEach(function(geometry){
      base_geometry.merge(geometry);
      geometry = new ThreeBSP(geometry);
      base_geometry2 = base_geometry2.union(geometry);
    });
    return base_geometry2.toGeometry();
    //return base_geometry;
  },



  subtract: function(base_geometry){
    var args = Array.prototype.slice.call(arguments);
    base_geometry = new ThreeBSP(base_geometry);

    args.slice(1).forEach(function(geometry){
      geometry = new ThreeBSP(geometry);
      base_geometry = base_geometry.subtract(geometry);
    });
    return base_geometry.toGeometry();
  },
  intersect: function(base_geometry){
    var args = Array.prototype.slice.call(arguments);
    base_geometry = new ThreeBSP(base_geometry);

    args.slice(1).forEach(function(geometry){
      geometry = new ThreeBSP(geometry);
      base_geometry = base_geometry.intersect(geometry);
    });
    return base_geometry.toGeometry();
  },


}

module.exports = csg_k;
