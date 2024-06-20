// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.






// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */
// Array.prototype.last = function() {
//     if(this.lenght){
//         return this[this.length-1];
//     }
//     return -1;
// };

// const arr = [1, 2, 3];
// arr.last(); 

// Extend the Array prototype to add the last method
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1; // Return -1 if the array is empty
    }
    return this[this.length - 1]; // Return the last element
}

// Example usage:

// Test case 1
let nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

// Test case 2
let nums2 = [];
console.log(nums2.last()); // Output: -1
