//Object Problem 2

/*
Create an array of people objects with first name, last name, and age, 
then write a JavaScript function that takes in an array and console logs 
the first and last names of all the people.
*/

let arrayOfPeople = [
		
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

function displayNameInfo(arrayOfObjects) {

    arrayOfObjects.forEach(function(a) {
        console.log(a.first + ' ' + a.last)
    });
}

displayNameInfo(arrayOfPeople);