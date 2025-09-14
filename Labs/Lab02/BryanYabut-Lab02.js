// Name: Bryan Paul Yabut
// ID: 101407350

// Question 1
const gretter = (myArray, counter) => {

    const greetText = 'Hello';

    for (let index of myArray) {
        console.log(`${greetText} ${index}`);
    }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Question 2
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

console.log("\nQuestion 2: ")
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Question 3
console.log("\nQuestion 3: ")
const colors = ['red', 'green', 'yellow'];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);

// Question 4
console.log("\nQuestion 4: ")
var values = [1, 60, 34, 30, 20, 5]
const filterLessThen20 = values.filter(value => value < 20);
console.log(filterLessThen20);

//Question 5
console.log("\nQuestion 5: ")
var array = [1, 2, 3, 4];
const calculateSum = array.reduce((a, b) => a + b);
const calculateProduct = array.reduce((a, b) => a * b);
console.log(calculateSum);
console.log(calculateProduct);

//Question 6
console.log("\nQuestion 6: ")
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Car Model: ${this.model}, Year: ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    displaySedanInfo() {
        console.log(`Sedan Model: ${this.model}, Year: ${this.year}, Balance: ${this.balance}`);
    }
}


const car2 = new Sedan("Pontiac", 1976);
car2.displayInfo();
const sedan = new Sedan("Volvo SD", 2018, 30000);
sedan.displaySedanInfo();