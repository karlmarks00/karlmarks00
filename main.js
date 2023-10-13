  
/*(1)
let num = [11, 4, 66, 7];
let sum_of_elements = 0;
for (let i = 0; i < num.length; i++) {
    sum_of_elements += num[i];
}
console.log(sum_of_elements);*/



/*(2)
let num = [14, 20, 5];
let prod = 1;
for(let i = 0; i < num.length; i++) {
    prod *= num[i];
}
console.log(prod)*/



/*(3)
let num = [10, 11, 12, 13];
for (let i = 0; i < num.length; i++) {
    if(num[i]%2 !=1) {
        console.log(num[i])
    }
}*/

/*(4)
let num = [10, 11, 12, 13];
for (let i = 0; i < num.length; i++) {
    if(num[i]%2 !=0) {
        console.log(num[i])
    }
}*/





/*(5)
let name = ['Maks', 'Miron', 'Iren', 'Maks', 'Marks'];
let uniqueName = new Set(name);
console.log(Array.from(uniqueName));*/




/*(6)
let num = [22, 10, 2, 0, -5]
for (let i = 0; i < num.length; i++) {
    if(num[i] >= 0) {
        console.log(num[i])
    } else if (num[i] < 0) {
        console.log(num[i])
    }
}*/

/*(7)
let num = [22, 10, 2, 0, -5, -200]
for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
        console.log(num[i])
    }
}*/


/*(8)
let numbers = [10, 15, 5, 20, 25, 30];
let big = 15;
let filteredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > big) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); */


/* (9)
let numbers = [10, 15, 5, 20, 25, 30];
let big = 15;
let filteredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < big) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers);  */



    

/*(10)let num = [1, 2, 3, 4, 5, 6]
for (let i = 1; i < num.length; i+=2) {
    console.log(num[i])
}*/