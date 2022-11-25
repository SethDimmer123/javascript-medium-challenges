// Question 1. Falsy or Truthy?

// Given two values, return the first one if it is falsy, otherwise return the seconds one.

// filterOutFalsy(0, 500) --> 0

// filterOutFalsy(false, 100) --> false

// filterOutFalsy([true, 'Dog']) --> 'Dog'

// function filterOutFalsy(elem1,elem2) {
//     if(!elem1)
//     return elem1

//     else{
//         return elem2
//     }
// }


// console.log(filterOutFalsy(true,'Dog'))








 
// if i want to convert a truthy value to a 
// falsy value i use 1 exclamation mark !


/**
 * how to check if a value is truthy or falsy?
 *  !!
 * double exclamation mark tells you if a value is
 * truthy or falsy
 */















// Question 2. Return the length of any given array

// Given an array, return its length.

// arrLength([1,2,3]) --> 3 (3 elements)

// arrLength([5, 0, -4, 1]) --> 4 (4 elements)

// arrLength([]) --> 0 (0 elements inside the array)


// function arrLength(arr) {
//     return arr.length
// }

// console.log(arrLength([5,0,-3,5]))
















// Question 3. Get the last element in an array.

// Given an array, return the first element.

// lastElem([3,2,0,6,2]) --> 2

// lastElem(['dog','cat','ball']) --> 'ball'

// lastElem([null,5,false]) --> false


// function lastElem(arr) {
//     return arr[arr.length-1]
// }
// console.log(lastElem([3,2,0,6,2]))




/**to get the last element of the array
 * i need to find out how many elements there
 * are and minus it by 1 because the index starts 
 * from 0 NOT 1 */ 














// Question 4. Find the sum of an array

// Given an array, return the sum of every element.


// arrSum([2,2,2]) --> 6

// arrSum([100,200,500]) --> 800

// arrSum ([0,-5,-10]) --> -15



// when i want to use every single element 
// of an array i need to use a for-loop


// arrSum([2,2,2])


// function arrSum(arr) {
//     let sum = 0;
//         // this is how you loop through every element of an array
//     for (let i = 0; i <= arr.length -1; ++i) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }






















// Question 5. Add up the numbers from a single number.

// Given a number, add up all the numbers from one to the number that is given. 

// E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.


// progressiveSum(3) --> 6

// progressiveSum(4) --> 10

// progressiveSum(600) --> 180300



// function progressiveSum(add) {
// let sum = 0;
// for(let i = 0; i <= 3; ++i ) {
//     sum += i
//   }
//   console.log(sum)
// }


// 1 + 2 + 3    --> 6

// 1 + 2 + 3 + 4 --> 10

//  600 -> 180300





























// Question 6. Calculate the time

// Given a number in seconds, return this number in mm:ss format

// calcTime(66) --> '1:06'

// calcTime(50) --> '00:50'

// calcTime(300) --> '05:00'


// step 1 
// function calcTime(seconds) {
//     return seconds % 60
// }

// console.log(calcTime(70));


// returning the remainder is 10 seconds in the console


// step 2
// How do we get the minutes?


// function calcTime(seconds) {
//     return seconds / 60; // 1 full minute
//     let timerSeconds = seconds % 60;
// }

// console.log(calcTime(70));


// step 3
//  we dont want the decimals

// using math.floor removes decimal
// and rounds the minutes down

// function calcTime(seconds) {
//     let timerMinutes = Math.floor (seconds / 60); 
//     let timerSeconds = seconds % 60;


//      return timerMinutes + ':' + timerSeconds
// }


// console.log(calcTime(70));

// shows undefined in console
// because we need to return minutes and and seconds
// then console log it



// step 4

// how do we add a 0 infront of the calculated time

// i only want a zero infront if the "minutes
// is 1 DIGIT"

// function calcTime(seconds) {
//     let timerMinutes = Math.floor (seconds / 60); 
//     let timerSeconds = seconds % 60;

//      return timerMinutes.toString().length; 
//      return timerMinutes + ':' + timerSeconds
// }


// console.log(calcTime(70));

// after we convert it to a string we add .length





// step 5

//  we add the if statement logic to make sure the 0
// only shows up when the minutes # is 1 DIGIT.


// function calcTime(seconds) {
//     let timerMinutes = Math.floor (seconds / 60); 
//     let timerSeconds = seconds % 60;

//      if( timerMinutes.toString().length === 1) {
//         let timerMinutes = '0' + timerMinutes
//      }


//      return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(5000));

// in the console there is no 0












// Question 7. Find the largest number

// Given an array of numbers, return the largest number of that array.



// getMax([5,100,0]) --> 100

// getMax([12,10,-20]) --> 12

// getMax([-300,-100,-200]) --> -100


// whenever i need to look through every element of an
// array i need to use a for-loop



// getMax([-300,-100,-200])

// function getMax(arr) {
//     let max = arr[0];// max is currently -300 becuase that is the first iteration
// for(let i = 0; i < arr.length; ++i) { // this is how you keep looping through the elements over and over again
//     if (arr[i] > max) {// if arr i (increments of i) is greater than number than the current max value that we are storing we are letting the new max value be the current iteration we are on
//         max = arr[i]; // then we make the max the number that is bigger than the current iteration we are on
//     }
//   }
// return max;
// //then we return it
// }

// console.log(getMax([-300,-100,-200]));





















// Question 8. Reverse a string

// Given a string, return the reversed string.

// reverseString('abc') -->'cba'

// reverseString('David') -->'divaD'

// reverseString('This is cool') -->'looc si sihT'



// - Use an incrementing for loop

// - Use an decrementing for loop

// - Use the array reverse property


// incrementing for loop down below

// function reverseString(str) {
//     let reversedString = '';
//     for(let i = 0; i < str.length; ++i) {
//         // this is how you loop through every 
//         // character in a string
//         reversedString = str[i] + reversedString;

//     }
//     return reversedString;
// }

// console.log(reverseString('abc'))



// string and array both have .length property that 
// i use if i want to loop through every single element 
// of a string and array











// decrementing for loop down below



// function reverseString(str) {
//     let reversedString = '';
//     for(let i = str.length - 1; i >= 0; --i) {
//         reversedString += str[i]

//     }
//     return reversedString;
// }

// console.log(reverseString('abc'))





// array reverse property NOTES down below

// an array has a reverse property 

// ['a','b','c'].reverse()
// ['c','b','a']


// how do we reverse a string?

// the .split method lets us convert a string to an array
// .split('')

"abc".split('')

 ['a','b','c']



//  we can add .reverse()

 "abc".split('').reverse()
 ['c','b','a']

//  that reverses the array

// but now we want to return it in a string

'abc'.split('').reverse().join('')
'cba'

// review of what is above

// .split method converting a string to an array

// .reverse method i can only use it on an ARRAY

// .join method is converting an array to a string









// Array reverse property


// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('abc'))














// Question 9. Turn every element in an array into 0 

// Given an array of elements,return the same length array filled with 0's.

// convertToZeros([5,100,0]) --> [0,0,0]

// convertToZeros([12]) --> [0]

// convertToZeros([1,2,3,4,5]) --> [0,0,0,0,0]

// - Solution 1: For loop

// - Array 'fill'

// - Array 'map'



function convertToZeros(arr) {
    for(let i = 0; i < arr.length; ++i) {
        arr[i] = 0
    }
    return arr
}

console.log(convertToZeros([1,2,3,4,5]))




// if i dont want to change the array 
// but i want to return a new array then do let newArr




// .fill method


function convertToZeros(arr) {
    return new Array(arr.length).fill(0)

}

console.log(convertToZeros([1,2,3]))



// you create a new array and fill it with zeros







// .map method (very important method) down below

// map method lets me map over every element in an array.

// .map method converts every element in your array into whatever
// is on the right hand side of the arrow function (=>)


// example  (do this in the console on your browser not on this vsc file)
// [1,2,3].map (elem => 'dog')

// in the console you should get

// (3) ['dog','dog','dog']




// function convertToZeros(arr) {
//     return arr.map(elem => 0)
// }

// console.log(convertToZeros([1,2,3]));


// ES6 has an invisible return that lets you
// return zeros

// function convertToZeros(arr) {
//     return arr.map(elem => {
//        return 0
//     });
// }

// console.log(convertToZeros([1,2,3]));


// the return is not invisible anymore
// if im using curly brackets i need to return it 
// itself

















// Question 10. Filter out all the apples

// Given an array of fruits, if it is an apple remove it from the array.


// removeApples(['Banana','Apple','Orange','Apple']) -->['Banana','Orange']

// removeApples(['Tomato','Orange','Banana']) -->['Tomato','Orange','Banana']

// removeApples(['Banana','Apple','Orange','Apple']) -->['Banana','Orange']


// - Solution 1: For loop

// - Solution 2: Array 'filter'


// function removeApples(arr) {
//     let noApples = []
//     for(let i = 0; i < arr.length; ++i) {
//         if(arr[i] !== 'Apple') {
//             noApples.push(arr[i]);
//         }
//     }
//     return noApples;
// }



// console.log(removeApples(['Banana','Apple','Orange']))




// i means the current element of an array

// step 1 loop through every single element with a for loop

// step 2 check if the current element is not equal to Apple
// then add it to the new empty array by the .push method
// we are adding the current element to the new array 

// then return the new array






// solution 2 down below 

// const arrayOfFruit = ['Banana','Orange','Apple']

// console.log(arrayOfFruit.filter((fruit) => fruit !=='Apple'));











// Question 11. Filter out all the falsy values

// Given an array of values, filter out all the falsy values and only return the truthy values.



// filterOutFalsy(["",[],0,null,undefined,"0"]) -->[[],"0"]

// filterOutFalsy(['Tomato','Orange','Banana',false]) --> ['Tomato', 'Orange', 'Banana']

// filterOutFalsy(['Banana','Orange','Apple']) --> ['Banana','Orange']


// - Solution 1: For loop

// - Solution 2: Array 'filter'









// filter method

// const filterOutFalsy =['Banana','Orange','Apple']

// console.log(filterOutFalsy.filter((falsy) => falsy !== 'Apple'));















// Question 12. Truthy to true, Falsy to false

// Given an array of truthy and falsy values, return the same array of elements into its boolean value.

// convertToBoolean([500,0,"David","",[]]) --> [true,false,true,false,true]










