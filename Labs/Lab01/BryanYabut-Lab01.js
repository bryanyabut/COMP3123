// Lab exercise 01
// Bryan Paul Yabut
// 101407350

//Question 01
const fox = "the quick brown fox";

const words = fox.split(" ");

for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log("Question 01: ")
console.log(words.join(" "));

//Question 02
console.log("\nQuestion 02: ")
console.log(Math.max (1,0,1));
console.log(Math.max (0,-10,-20));
console.log(Math.max (1000,510,440));

//Question 03
function right(str){
    if(str.length <= 3){
        return str;
    }
    return str.slice(-3) + str.slice(0, -3);
}

console.log("\nQuestion 03: ")
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


//Question 04
function angle_Type(angle){
    if(angle < 90){
        return "Acute Angle";
    }
    else if (angle == 90){
        return "Right Angle";
    }
    else if (angle < 180 ){
        return "Obtuse Angle";
    }
    else if (angle == 180){
        return "Straight Angle";
    }
}

console.log("\nQuestion04: ")
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

//Question05:
function array_max_sum(arr, k) {
  if (k > arr.length) {
    return null;
  }

  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; 
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log("\nQuestion05: ")
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));