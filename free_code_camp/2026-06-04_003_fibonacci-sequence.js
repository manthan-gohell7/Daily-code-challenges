/***************************************

- Challenge #003
- Date: 2026-06-04
- Platform: freeCodeCamp
- Title: Fibonacci Sequence
- Topics: Arrays, Iteration, Sequence Generation
- Description: The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

  • Your function should handle sequences of any length greater than or equal to zero.
  • If the length is zero, return an empty array.
  • Note that the starting numbers are part of the sequence.
- Approach: Start with the provided seed values, handle cases where the requested length is smaller than the starting sequence, then iteratively generate new elements by summing the previous two values until the desired length is reached.
- Notes: Practiced array manipulation, indexing, and iterative sequence generation.

***************************************/

function fibonacciSequence(startSequence, length) {
  const arr = startSequence;
  const arrLen = arr.length;
 
  if(length <= arrLen){
    return arr.slice(0, length);
  }

  const fibArr = arr;
  for(let i=arrLen; i<length; ++i){
    const beforePreviousIndex = i-arrLen; 

    fibArr.push(arr[beforePreviousIndex] + arr[beforePreviousIndex+1]);
  }

  return fibArr;
}