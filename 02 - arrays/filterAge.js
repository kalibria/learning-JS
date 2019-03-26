var arr = [{name: 'Peter', age: 25},
{name: 'Sarah', age: 59},
{name: 'Sven', age: 22},
{name: 'George', age: 35}]; 
var newAge = arr.filter(function(item){
	return item.age > 25;
});
console.log(newAge);