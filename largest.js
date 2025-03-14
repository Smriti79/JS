function findLargest(arr) {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([79, 25, 13, 56, 1000]));


// function findLargest(arr) {

//     return Math.max(...arr); 
// }
// console.log(findLargest([99, 5, 3, 100, 1]));
