

  /*




  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );



  var geometry= new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshPhongMaterial( { color: 0x86c811 } );
  //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  world.cameras.cube_camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  world.cameras.cube_camera.position.z = 2;
  world.cameras.cube_camera.position.y = 1.5;
  cube.add(world.cameras.cube_camera);
  world.camera_cycle.append(world.cameras.cube_camera);


  //var floor_geometry;
  //var floor_material;
  //var floor_mesh;
  //var floor_color;

  for( var i = 0; i<10; i++){

    var floor_color = new THREE.Color( 1-(i*1/10), 1-(i*1/10), 1-(i*1/10) );
    var floor_geometry = new THREE.BoxGeometry( 9, 0.5, 9 );
    var floor_material = new THREE.MeshPhongMaterial( { color: floor_color } );

    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(0,-2,i*10);
    scene.add( floor_mesh );
    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(0,-2,-i*10);
    scene.add( floor_mesh );
    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(i*10,-2,0);
    scene.add( floor_mesh );
    var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
    floor_mesh.position.set(-i*10,-2,0);
    scene.add( floor_mesh );

    for( var c = 1; c<(i+1); c++){
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(c*10,-2,i*10);
      scene.add( floor_mesh );
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(-c*10,-2,i*10);
      scene.add( floor_mesh );
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(c*10,-2,-i*10);
      scene.add( floor_mesh );
      var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
      floor_mesh.position.set(-c*10,-2,-i*10);
      scene.add( floor_mesh );

      if( c<i) {
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(i*10,-2,c*10);
        scene.add( floor_mesh );
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(-i*10,-2,c*10);
        scene.add( floor_mesh );
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(i*10,-2,-c*10);
        scene.add( floor_mesh );
        var floor_mesh = new THREE.Mesh( floor_geometry, floor_material );
        floor_mesh.position.set(-i*10,-2,-c*10);
        scene.add( floor_mesh );

      }

    }

  }
