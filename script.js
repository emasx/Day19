// An array is like a big container into which we can throw variables and then later reference them.

// The two most important data structures in JavaScript are Arrays and Objects.

const friends = ['Michael','Steven', 'Peter'];
console.log(friends);



const y = new Array(1991, 1984, 2008, 2020);
console.log(y);


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // friends.length is not zero based  (3-1 = 2 which is the last element in the array)


// Change an element into an array
// ! ONLY PRIMITIVE VALUES ARE IMMUTABLE, an array is not a primitive value.
friends[2] = 'Jay';
console.log(friends);





const firstName ='De';
const emas = [firstName,'Emas', 2037 - 1994,'teacher',friends];
console.log(emas);
console.log(emas.length);



// Exercise 

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
 calcAge(years[0]),
 calcAge(years[1]),
 calcAge(years[years.length - 1])
];
console.log(ages);














// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);