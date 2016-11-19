var THREE = require('three');

var unibase = global.dbs.universe;

var addObjectToDb = function(){


  sector = {
    sector: sectorName,
    contents: [],
    lastId: 0
  };
  unibase.set('sectors', sector);

  //var geometry = new THREE.Geometry();
  var geometry = union(parts);
  var material = new THREE.MeshLambertMaterial( { color: '#787878' } );

  var geometryObj = geometry.toJSON();
  var geometryJSON = JSON.stringify(geometryObj);
  var jsonObj = JSON.parse(geometryJSON);
  var loader = new THREE.JSONLoader();
  var geometry = loader.parse( jsonObj.data ).geometry;



}

module.exports = addObjectToDb;
