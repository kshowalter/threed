/*jslint loopfunc:true */

var test_plane = function(scene){

  var floor_mesh;

  for( var i = 0; i<10; i++){

    var floor_color = new THREE.Color( 1-(i*1/10), 1-(i*1/10), 1-(i*1/10) );
    var floor_geometry = new THREE.BoxGeometry( 10, 10, 0.5 );
    var floor_material = new THREE.MeshPhongMaterial( { color: floor_color } );

    [
      [0,i*10,-0.25],
      [0,-i*10,-0.25],
      [i*10,0,-0.25],
      [-i*10,0,-0.25],
    ].forEach(function(coor){
      floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(coor[0],coor[1],coor[2]);
      scene.add( floor_mesh );
    });

    for( var c = 1; c<(i+1); c++){
      [
        [c*10,i*10,-0.25],
        [-c*10,i*10,-0.25],
        [c*10,-i*10,-0.25],
        [-c*10,-i*10,-0.25],
      ].forEach(function(coor){
        floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(coor[0],coor[1],coor[2]);
        scene.add( floor_mesh );
      });


      if( c<i) {
        [
          [i*10,c*10,-0.25],
          [-i*10,c*10,-0.25],
          [i*10,-c*10,-0.25],
          [-i*10,-c*10,-0.25],
        ].forEach(function(coor){
          floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
          floor_mesh.position.set(coor[0],coor[1],coor[2]);
          scene.add( floor_mesh );
        });

      }

    }

  }



}

module.exports = test_plane;
