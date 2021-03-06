// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  // if (number1 >= number2) {
  //   return number1;
  // }

  // return number2;

  return Math.max(number1, number2);
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(stringsArray) {
  if (stringsArray.length === 0) {
    return null;
  }

  let longestWord = '';

  for (let i = 0; i < stringsArray.length; i += 1) {
    if (stringsArray[i].length > longestWord.length) {
      longestWord = stringsArray[i];
    }
  }

  return longestWord;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i += 1) {
    sum += numbersArray[i];
  }

  return sum;
}

// Iteration 3.1 #BONUS: Super Sum Calculator
const elementsArray = [6, 12, 'monkey', 18, true, 16, 'apple', 1, false, 10];

function sum(array) {
  let sumOfElements = 0;

  for (let i = 0; i < array.length; i += 1) {
    const dataType = typeof array[i];

    switch (dataType) {
      case 'number':
        sumOfElements += array[i];
        break;
      case 'string':
        sumOfElements += array[i].length;
        break;
      case 'boolean':
        if (array[i]) {
          sumOfElements += 1;
        }
        break;
      default:
        throw new Error("Unsupported data type sir or ma'am");
    }
  }

  return sumOfElements;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return null;
  }

  const sumOfNumbers = sumNumbers(numbersArray);

  return sumOfNumbers / numbersArray.length;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(stringsArray) {
  if (stringsArray.length === 0) {
    return null;
  }

  const numbersArray = [];

  for (let i = 0; i < stringsArray.length; i += 1) {
    const wordLength = stringsArray[i].length;

    numbersArray.push(wordLength);
  }

  const sumOfNumbers = sumNumbers(numbersArray);

  return sumOfNumbers / numbersArray.length
}

// Iteration 4.1 #BONUS: Super Avg Calculator
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(array) {
  if (array.length === 0) {
    return null;
  }

  const average = sum(array) / array.length;

  return +average.toFixed(2);
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(stringsArray) {
  if (stringsArray.length === 0) {
    return null;
  }

  const returnArray = [];

  for (let i = 0; i < stringsArray.length; i += 1) {
    if (returnArray.indexOf(stringsArray[i]) === -1) {
      returnArray.push(stringsArray[i])
    }
  }

  return returnArray;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'machine', 'matter', 'eating', 'truth', 'disobedience'];

'machine'

function doesWordExist(stringsArray, string) {
  if (stringsArray.length === 0) {
    return null;
  }

  // return stringsArray.includes(string);

  for (let i = 0; i < stringsArray.length; i += 1) {
    if (stringsArray[i] === string) {
      return true;
    }
  }

  return false;
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(stringsArray, string) {
  let count = 0;

  for (let i = 0; i < stringsArray.length; i += 1) {
    if (stringsArray[i] === string) {
      count += 1;
    }
  }

  return count;
}

// Iteration #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 90],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 90],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 90],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 100, 100, 100, 90]
];

// console.log(matrix[0][0] * matrix[0][0 + 1] * matrix[0][0 + 2] * matrix[0][0 + 3])
// console.log(matrix[0][0] * matrix[0 + 1][0] * matrix[0 + 2][0] * matrix[0 + 3][0])

function greatestProduct(array) {
  let biggestNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      let horizontalProduct = 0;
      let verticalProduct = 0;

      if (array[i][j + 3] !== undefined){
        horizontalProduct = array[i][j] * array[i][j + 1] * array[i][j + 2] * array[i][j + 3];
      }

      if (horizontalProduct > biggestNumber) {
        biggestNumber = horizontalProduct;
      }

      if (array[i + 3] !== undefined) {
        verticalProduct = array[i][j] * array[i + 1][j] * array[i + 2][j] * array[i + 3][j];
      }

      if (verticalProduct > biggestNumber) {
        biggestNumber = verticalProduct;
      }
    }
  }

  return biggestNumber;
}

console.log(greatestProduct(matrix));
