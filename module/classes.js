var c = {};

c.Cycle = function(array){
  if( ! array || array.constructor !== Array) array = [];
  var cycle = {};
  //cycle.keys = Object.keys(obj)

  cycle.array = array;
  cycle.index = 0;
  cycle.get = function(){
    var selection = this.array[this.index];
    return selection;
  };
  cycle.next = function(){
    var selection = this.array[this.index++];
    console.log('selected: ', selection);
    if( this.index > this.array.length-1 ) this.index = 0;
    return selection;
  };
  cycle.append = function(obj){
    this.array.push(obj);
  };


  return cycle;
};

module.exports = c;
