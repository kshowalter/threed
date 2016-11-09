var f = {};

f.distance_between_2d = function(point_a, point_b){
  var distance = Math.sqrt( Math.pow( (point_a[0]-point_b[0]) ,2) + Math.pow( (point_a[1]-point_b[1]) ,2) );
  return distance;
};

f.midpoint_2d = function(point_a, point_b){
  var midpoint = [];
  midpoint[0] = point_a[0] + (point_a[0]-point_b[0])/2;
  midpoint[1] = point_a[1] + (point_a[1]-point_b[1])/2;
  return midpoint;
};

f.rads = function(degrees){
  return degrees*Math.PI*180;
};

module.exports = f;
