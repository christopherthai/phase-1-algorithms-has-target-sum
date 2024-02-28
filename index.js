function hasTargetSum(array, target) {
  // Write your algorithm here

  // n steps
  for (let i = 0; i < array.length; i++) {

    let subtractNumber = target - array[i]
    // n steps
     for (let j = i + 1; j < array.length; j++) {

        if (array[j] === subtractNumber){
          return true
        }
    }
  }  
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here

  Create two for-loops
  One for-loop to iterate through the array
  Another for-loop to iterate through the array without the number you are going to compare to

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
