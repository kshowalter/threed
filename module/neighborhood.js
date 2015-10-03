/*jslint loopfunc:true */

var neighborhood = function(scene, base_x, base_y, base_z){

  var floor_mesh;

  //var floor_color = new THREE.Color( 1-(i*1/10), 1-(i*1/10), 1-(i*1/10) );
  //var floor_geometry = new THREE.BoxGeometry( 10, 10, 0.5 );
  //var floor_material = new THREE.MeshPhongMaterial( { color: floor_color } );

  //[
  //  [0,i*10,-0.25],
  //  [0,-i*10,-0.25],
  //  [i*10,0,-0.25],
  //  [-i*10,0,-0.25],
  //]

  var mk_house_lot = function(){
    var house_lot = new THREE.Group();

    var house_geometry = new THREE.BoxGeometry( 10, 10, 20 );
    var house_material = new THREE.MeshPhongMaterial( { color: '#ffffff' } );
    //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var house = new THREE.Mesh( house_geometry, house_material );
    house_lot.add(house);

    var fence_geometry = new THREE.BoxGeometry( 30, 0.1, 2 );
    var fence_material = new THREE.MeshPhongMaterial( { color: '#ffffff' } );

    var fence_s = new THREE.Mesh( fence_geometry, fence_material );
    fence_s.position.y = -14.9;
    house_lot.add(fence_s);

    var fence_n = new THREE.Mesh( fence_geometry, fence_material );
    fence_n.position.y = 14.9;
    house_lot.add(fence_n);

    var fence_e = new THREE.Mesh( fence_geometry, fence_material );
    fence_e.rotateZ(90*Math.PI/180);
    fence_e.position.x = 14.9;
    house_lot.add(fence_e);
    var fence_w = new THREE.Mesh( fence_geometry, fence_material );
    fence_w.rotateZ(90*Math.PI/180);
    fence_w.position.x = -14.9;
    house_lot.add(fence_w);


    return house_lot;
  };

  var mk_road_section = function(start, end){

    var length = f.distance_between_2d(start,end);
    var midpoint = f.midpoint_2d(start,end);

    var road_geometry = new THREE.BoxGeometry( length, s.road_section.width, s.road_section.height );
    var road_material = new THREE.MeshPhongMaterial( { color: 0x303030 } );
    var road_mesh = new THREE.Mesh( road_geometry, road_material );

    return road_mesh;
  };




  var s = {
    house: {
      width:10,
    },
    house_lot: {
      width: 30,
    },
    road_section: {
      length: 10,
      width: 8,
      height: 0.1,
    },
    houses_per_street: 7,
    green_space: {
      width: 30,
    },
  };


  var x,y;

  var road = [];

  var display = [];

  display.push(mk_road_section([0,0],[-50,-50]));

  _.times(1, function(r){
    var main_road_length = (s.house_lot.width*2 + s.green_space.width )/s.road_section.length;
    _( main_road_length ).times(function(i){
      road.push([0,i+r]);
    });

    _.times( (s.houses_per_street*s.house_lot.width)/s.road_section.length, function(i){
      road.push([i+1,r+main_road_length]);
    });
    _.times( s.houses_per_street, function(i){
      var house_lot = mk_house_lot();
      house_lot.position.x = 5+15+(i*30);
      house_lot.position.y = (r+main_road_length)*10 + 20;
      display.push(house_lot);
      var house_lot = mk_house_lot();
      house_lot.position.x = -(5+15+(i*30));
      house_lot.position.y = (r+main_road_length)*10 + 20;
      display.push(house_lot);
    });
    _.times( (s.houses_per_street*s.house_lot.width)/s.road_section.length, function(i){
      road.push([-(i+1),r+main_road_length]);
    });




  });





  var height = 0.1;
  var road_geometry = new THREE.BoxGeometry( 10, 10, height );
  var road_material = new THREE.MeshPhongMaterial( { color: 0x303030 } );


  road.forEach(function(coor){
    var road_mesh = new THREE.Mesh( road_geometry, road_material );
    var x = coor[0]*10;
    var y = coor[1]*10;
    var z = height/2;
    road_mesh.position.set( x,y,z );
    scene.add( road_mesh );
  });

  console.log(display);
  display.forEach(function(three_object){
    world.objs.push(three_object);
  });

};

module.exports = neighborhood;
