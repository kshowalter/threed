var ThreeBSP = window.ThreeBSP;


var csg_k = {
  union: function(base_geometry){
    var args = Array.prototype.slice.call(arguments);
    base_geometry = new ThreeBSP(base_geometry);

    args.slice(1).forEach(function(geometry){
      geometry = new ThreeBSP(geometry);
      base_geometry = base_geometry.union(geometry);
    });
    return base_geometry.toGeometry();
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
