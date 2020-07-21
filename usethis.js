console.log("yo I'm working");

//think about edge cases for parameters

// 100 Section
function addinator (num1, num2){
  return Number(num1) + parseInt(num2);
}

//remember that parseInt turns strings into numbers
//dont forget  Number turns your strings into numbers

//110 Section conditionals

function numbersComparison (num1, num2){
  if (Number(num1) > Number(num2)) {
    return 'The first number was bigger!'
  }
  else if ( Number(num1) < Number(num2)) {
    return 'The second number was bigger!';
  }
  else return "The numbers are the same!"
  }



console.log(numbersComparison(3, 2));
console.log(numbersComparison(2, 7));
console.log(numbersComparison(7, 7));


//120 Section Arrays
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = [6, 7, 8, 9, 10, 11, 12];

function firstAndLast (someArray) {
  let firstNumber = someArray[0];
  let lastNumber = someArray[someArray.length-1];
  return firstNumber + lastNumber;
}

console.log(firstAndLast(arrayOne));
console.log(firstAndLast(arrayTwo));


/// remember to call the variable before you do anything with the index value



//Section 130///


let arrayAndString = (["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3);

let arrayFirst = [1, 3, 4, 6];


function loop (target) {
  for (key of target) {
    console.log(target[key]);
  }
}



console.log(loop (arrayFirst));
//hi there
