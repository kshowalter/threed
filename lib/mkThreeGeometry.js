var THREE = require('three');
var csg_k = require('csg_k');

var mkThreeGeometry = function(spec){
  var geometry = false;

  if(spec.type === 'union'){
    var toJoin = [];
    spec.contains.forEach(function(subSpec){
      toJoin.push( mkThreeGeometry(subSpec) );
    });


    geometry = csg_k.union(toJoin);
  }

  if( spec.type === 'sphere'){
    geometry = new THREE.SphereGeometry( spec.props.diam, 16, 16);
    geometry.translate( spec.props.x, spec.props.y, spec.props.z );
  }

  return geometry;
};

module.exports = mkThreeGeometry;
