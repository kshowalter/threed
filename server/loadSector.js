var unibase = global.dbs.universe;

var loadSector = function(sectorName){
  //console.log('loading: ', sectorName);

  var sector = unibase.get('sectors', {
    sector: sectorName
  });


  if( ! sector.length ){
    sector = {
      sector: sectorName,
      contents: [],
      lastId: 0
    };
    unibase.set('sectors', sector);
  } else {
    sector = sector[0];
  }



  


};

module.exports = loadSector;
