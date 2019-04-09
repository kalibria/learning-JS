function Human(name, height, weight){
	this.name = name;
  this.height = height;
	this.weight = weight;
  this.getName = function(){
  return this.name;
  }
}
var masha = new Human("Masha", 170, 60);
console.log (masha);
console.log (masha.getName());