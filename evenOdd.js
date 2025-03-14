function isEven(num) {
    return num % 2 === 0;
}

const num = 50; 
const result = isEven(num);

console.log(result); 
if (result) {
    console.log("Yes, the number is even.");
} else {
    console.log("The number is odd.");
}
