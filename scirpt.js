//Object Problem 2

/*
Create an array of people objects with first name, last name, and age, 
then write a JavaScript function that takes in an array and console logs 
the first and last names of all the people.
*/

const arrayOfPeople = [
		
		{
			'first': 'Bruce',
			'last': 'Wayne',
			'age': 35,
		},

		{
			'first': 'Peter',
			'last': 'Parker',
			'age': 17,
		},

		{
			'first': 'Clark',
			'last': 'Kent',
			'age': 16,
		},

	];

const arrayOfCars = [
		{
			make: 'Dodge',
			model: 'Ram',
		},

		{
			make: 'Mercedes',
			model: 'E-Class',
		},

		{
			make: 'Toyota',
			model: 'Tundra',
		},
	]

myFunction = array => {

	for (i = 0; i< array.length; i++){
		console.log(array[i].make + " " + array[i].model);
	}
//loops through each object in the array, focusing on the specified key
//combines the two keys and logs the result
	
}
console.log(myFunction(arrayOfCars));
