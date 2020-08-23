//Nested Data Structure Exercise
/*
1. Given the following nested object:
*/
var nestedData = {
	innerData : {
	order : [ "first" , "second" , "third" ],
	snacks : [ "chips" , "fruit" , "crackers" ],
	numberData : {
		primeNumbers : [ 2 , 3 , 5 , 7 , 11 ],
		fibonnaci : [ 1 , 1 , 2 , 3 , 5 , 8 , 13 ]
	},
	addSnack : function (snack){
		this.snacks.push(snack);
		return this ;
	}
	}
}
//#1a - ● Using a for loop, console.log all of the numbers in the primeNumbers array.
writePrime = nestedData.innerData.numberData.primeNumbers;
	for(var i=0; i<writePrime.length; i++){
	console.log(writePrime[i]);
}

//#1b - ● Using a for loop, console.log all of the even Fibonnaci numbers.
writeEvenFibonnaci = nestedData.innerData.numberData.fibonnaci;
	for(var i=0; i<writeEvenFibonnaci.length; i++){
		if(i%2===0){
		console.log(writeEvenFibonnaci[i]);
		}
}

//#1c - ● Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order);

//#1d - ● Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("chocolate")
console.log(this)

/*1e -  Inside of the addSnack function there is a special keyword called this . What
does the word this refer to inside the addSnack function?


this keyword references the object in a global context
*/

/*
2. Given the following nested object:
var nestedObject = {
	speakers : [{ name : "Elie" },{ name : "Tim" },{ name : "Matt" }],
	data : {
		continents : {
			europe : {
				countries : {
					switzerland : {
						capital : "Bern" ,
						population : 8000000
						}
					}
				}
			},
			languages : {
				spanish : {
				hello : "Hola"
				},
				french : {
					hello : "Bonjour"
				}
			}
	}
}
*/

/* #2a
● Write a function addSpeaker to add a speaker to the array of speakers. The
speaker you add must be an object with a key of name and a value of
whatever you'd like.
*/
function addSpeaker() {
	nestedObject.speakers.push({name : "Jane")
}

/* #2b
● Write a function addLanguage that adds a language to the languages object.
The language object you add should have a key with the name of the
language and the value of another object with a key of "hello" and a value of
however you spell "hello" in the language you add.
*/
function addLanguage() {
	nestedObject.data.languages = {
			german : {
			hello : "Hallo"
	}}
return nestedObject.data.languages
}

/* #2c
● Write a function addCountry that adds a European country to the countries
object (inside of the continents object, inside of the countries object). The
country you add should be an object with the key as name of the country and
the value as an object with the keys of "capital" and "population" and their
respective values.
*/
function addCountry() {
	nestedObject.data.continents.europe.countries = {
		Germany : {
			Capital : "Berlin",
			Population : 83200000
		}
}

/* 3. Write a function called rotate which takes an array and a number, and moves
each element however many spaces the number is to the right. For the value at the
end of the array, rotate should move it back to the beginning.
rotate([ 1 , 2 , 3 ], 1 ) // [3,1,2]
rotate([ 1 , 2 , 3 ], 2 ) // [2,3,1]
rotate([ 1 , 2 , 3 ], 3 ) // [1,2,3]
*/






















