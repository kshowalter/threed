var loadSector = require('./loadSector');

var sectorFind = function(location){
  var sx = Math.floor( location.x / 1000 );
  var sy = Math.floor( location.y / 1000 );
  var sz = Math.floor( location.z / 1000 );
  var sectorName = sx+'.'+sy+'.'+sz;
  return sectorName;
};

var updateAvatar = function(update){

  var sectorName = sectorFind(update.location);

  //console.log('Avatar at: '+update.userId+' '+update.avatarId+' '+update.location.x+' '+update.location.y+' '+update.location.z+' sector: '+sectorName);

  //var doc = global.dbs.universe.get('sectors', {
  //  sector: sectorName
  //});

  loadSector(sectorName);




};

module.exports = updateAvatar;
