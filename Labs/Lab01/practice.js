//question 1
function is_array(input){
    return Array.isArray(input);
}
let number = 1;
console.log(is_array("Hello World"));
console.log(is_array([1,2,3,4]));
console.log(is_array(number));


//Question 2
console.log("\nQuestion 02");
function first(input){
    return input.find(firstElement => [0]);
}

console.log(first([7, 9, 0, -2]));

console.log(first([],3))

console.log(first([7, 9, 0, -2],3));

console.log(first([7, 9, 0, -2],6));

console.log(first([7, 9, 0, -2],-3));