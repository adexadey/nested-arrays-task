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












