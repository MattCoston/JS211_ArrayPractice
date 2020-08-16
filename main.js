'use strict'

let cars = ["Ford", "Audi", "Tesla", "Honda"];

//console.log(cars.length);

let moreCars = ["Nikola", "Jeep", "Hundai", "Honda"];

let totalCars = cars.concat(moreCars);
//console.log(totalCars);

//console.log(cars.indexOf("Honda"))
//console.log(cars.lastIndexOf("Ford"))

let stringOfCars = totalCars.join()
//console.log(stringOfCars)

let carsInReverse = totalCars.reverse()
//console.log(carsInReverse)

carsInReverse.sort()
//alert(carsInReverse.indexOf('Audi'))
//console.log(carsInReverse)
let removedCars = carsInReverse.slice(1,3)
carsInReverse.splice(1, 2, "Ford", "Honda")
//console.log(carsInReverse)

carsInReverse.push("Ford", "Honda")
//console.log(carsInReverse)
//console.log(carsInReverse.pop())
//console.log(carsInReverse.shift())
carsInReverse.unshift("Mazda")
//console.log(carsInReverse)
let numbers = [23, 45, 0, 2]

numbers.forEach(function(addTwo){
    let adder = addTwo + 2
    numbers.push(adder)
})

console.log(numbers)