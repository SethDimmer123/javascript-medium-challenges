// Question 1. Falsy or Truthy?

// Given two values, return the first one if it is falsy, otherwise return the seconds one.

// filterOutFalsy(0, 500) --> 0

// filterOutFalsy(false, 100) --> false

// filterOutFalsy([true, 'Dog']) --> 'Dog'

function falsyOrTruthy(elem1,elem2) {
    return elem1 ? elem1 : elem2;
}

console.log(falsyOrTruthy(10,5))











// Question 2. Return the length of any given array

// Given an array, return its length.

// arrLength([1,2,3]) --> 3

// arrLength([5, 0, -4, 1]) --> 4

// arrLength([]) --> 0













// Question 3. Get the last element in an array.

// Given an array, return the first element.

// lastElem([3,2,0,6,2]) --> 2

// lastElem(['dog','cat','ball']) --> 'ball'

// lastElem([null,5,false]) --> false















// Question 4. Find the sum of an array

// Given an array, return the sum of every element.


// arrSum([2,2,2]) --> 6

// arrSum([100,200,500]) --> 800

// arrSum ([0,-5,-10]) --> -15














// Question 5. Add up the numbers from a single number.

// Given a number, add up all the numbers from one to the number that is given. 

// E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.

// It is confusing what does that mean(12:15)

// progressiveSum(3) --> 6

// progressiveSum(4) --> 10

// progressiveSum(600) --> 180300






















// Question 6. Calculate the time

// Given a number in seconds, return this number in mm:ss format

// calcTime(66) --> '1:06'

// calcTime(50) --> '00:50'

// calcTime(300) --> '05:00'
















// Question 7. Find the largest number

// Given an array of numbers, return the largest number of that array.



// getMax([5,100,0]) --> 100

// getMax([12,10,-20]) --> 12

// getMax([-300,-100,-200]) --> -100


















// Question 8. Reverse a string

// Given a string, return the reversed string.

// reverseString('abc') -->'cba'

// reverseString('David') -->'divaD'

// reverseString('This is cool') -->'looc si sihT'



// - Use an incrementing for loop

// - Use an decrementing for loop

// - Use the array reverse property















// Question 9. Turn every element in an array into 0 

// Given an array of elements,return the same length array filled with 0's.

// convertToZeros([5,100,0]) --> [0,0,0]

// convertToZeros([12]) --> [0]

// convertToZeros([1,2,3,4,5]) --> [0,0,0,0,0]

// - Solution 1: For loop

// - Array 'fill'

// - Array 'map'



















// Question 10. Filter out all the apples

// Given an array of fruits, if it is an apple remove it from the array.


// removeApples(['Banana','Apple','Orange','Apple']) -->['Banana','Orange']

// removeApples(['Tomato','Orange','Banana']) -->['Tomato','Orange','Banana']

// removeApples(['Banana','Apple','Orange','Apple']) -->['Banana','Orange']


// - Solution 1: For loop

// - Solution 2: Array 'filter'
















// Question 11. Filter out all the falsy values

// Given an array of values, filter out all the falsy values and only return the truthy values.



// filterOutFalsy(["",[],0,null,undefined,"0"]) -->[[],"0"]

// filterOutFalsy(['Tomato','Orange','Banana',false]) --> ['Tomato', 'Orange', 'Banana']

// filterOutFalsy(['Banana','Orange','Apple']) --> ['Banana','Orange']


// - Solution 1: For loop

// - Solution 2: Array 'filter'






















// Question 12. Truthy to true, Falsy to false

// Given an array of truthy and falsy values, return the same array of elements into its boolean value.

// convertToBoolean([500,0,"David","",[]]) --> [true,false,true,false,true]










