function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}


function Person(name, age, accidents, gender){

	this.name = name;
	this.age = age;
	this.accidents = accidents;
	this.gender = gender;

/////////////////////////////

	this.quote = function(){
		var someNumber = 0;
			if(this.gender == "male"){
				someNumber = (this.accidents + randomNumber(0,3)) * this.age;
				console.log("Male Condition: " + someNumber);
				return someNumber;

			} else {
				someNumber = randomNumber(0,2);
				console.log("Female Condition: " +someNumber);
				this.accidents -= someNumber;
				return someNumber;
			}
	};

	this.kittyCats = function(){
		console.log("meow");
	}
}

var newArray = [];
for (var i =0 ; i < 20; i++){
	var newPerson = new Person (i, getAge(), getAccidents(), getGender());
	newPerson.kittyCats();
	newArray.push(newPerson);
}

for(i = 0; i < 20 ; i++){
	newArray[i].quote();
}

console.log(newArray);

function getGender(){
	var gender = randomNumber(1,2);
		if (gender == 1){
			return "male"
		} else {return "female"}

}

function getAge(){
	var age = randomNumber(16,105);
	return age;
}
function getAccidents(){
	var accidents = randomNumber(0,10);
	return accidents;
}
