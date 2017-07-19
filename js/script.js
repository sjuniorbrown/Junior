
function person(name, age, gender, race, city){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.race = race;
  this.city = city;
}
var juju = new person("junior", 21, "male", "black");

function output(){

}
var out = document.getElementById("data");
 out.innerHTML = "<h1> I am " + juju.name + "</h1><br>" + "<h2> I am " + juju.age + " years old </h2><br>" + "<h3> I am a " + juju.race + " " + juju.gender + " living in " + juju.city + "</h3>";

console.log(juju.age);
