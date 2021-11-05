// const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

// function golfScore(par, strokes) {
//     // Only change code below this line
//     if (strokes === 1) {
//         return names[0];
//     }
//     if (strokes <= par - 2) {
//         return names[1];
//     }
//     if (strokes === par - 1) {
//         return names[2];
//     }
//     if (strokes === par) {
//         return names[3];
//     }
//     if (strokes === par + 1) {
//         return names[4];
//     }
//     if (strokes === par + 2) {
//         return names[5];
//     }
//     if (strokes >= par + 3) {
//         return names[6];
//     }
//     return 'Change Me';
//     // Only change code above this line
// }

// golfScore(5, 4);
// function caseInSwitch(val) {
//     let answer = '';
//     // Only change code below this line
//     switch (val) {
//         case 1:
//             answer = 'alpha';
//             break;
//         case 2:
//             answer = 'beta';
//             break;
//         case 3:
//             answer = 'gamma';
//             break;
//         case 4:
//             answer = 'delta';
//             break;
//         default:
//             answer = '';
//     }

//     // Only change code above this line
//     return answer;
// }

// caseInSwitch(1);

// function chainToSwitch(val) {
//     let answer = '';
//     // Only change code below this line

//     // if (val === 'bob') {
//     //     answer = 'Marley';
//     // } else if (val === 42) {
//     //     answer = 'The Answer';
//     // } else if (val === 1) {
//     //     answer = 'There is no #1';
//     // } else if (val === 99) {
//     //     answer = 'Missed me by this much!';
//     // } else if (val === 7) {
//     //     answer = 'Ate Nine';
//     // }

//     switch (val) {
//         case 'bob':
//             answer = 'Marley';
//             break;
//         case 42:
//             answer = 'The Answer';
//             break;
//         case 1:
//             answer = 'There is no #1';
//             break;
//         case 99:
//             answer = 'Missed me by this much!';
//             break;
//         case 7:
//             answer = 'Ate Nine';
//             break;
//         default:
//             answer = '';
//             break;
//     }

//     // Only change code above this line
//     return answer;
// }

// Generate random number between 1 and 10

// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     return obj.hasOwnPoperty(checkProp) ? obj[checkProp] : 'Not Found';
//     // Only change code above this line
// }
// const res = checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift');
// console.log(res)
// Setup
// Setup
// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name'],,
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette'],,
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: [],,
//     },
//     5439: {
//         albumTitle: 'ABBA Gold',,
//     },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//     if (prop != 'tracks' && value != '') {
//         records[id].prop = value;;
//     } else if (prop ===  'tracks' && records[id].hasOwnProperty('tracks') === false) {
//         records[id].prop = value;;
//     } else if (prop === 'tracks' && value !== '') {
//         records[id].prop.push (value);
//     } else if (value === '') {
//         delete records[id].prop;;
//     }
//     return records;
// }

// // updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// const myArray = [];

// // Only change code below this line
// for (i = 9; i > 0; i -= 2) {
//     myArray.push(i);
// }

// Setup
// const contacts = [
//     {
//         firstName: 'Akira',
//         lastName: 'Laine',
//         number: '0543236543',
//         likes: ['Pizza', 'Coding', 'Brownie Points'],
//     },
//     {
//         firstName: 'Harry',
//         lastName: 'Potter',
//         number: '0994372684',
//         likes: ['Hogwarts', 'Magic', 'Hagrid'],
//     },
//     {
//         firstName: 'Sherlock',
//         lastName: 'Holmes',
//         number: '0487345643',
//         likes: ['Intriguing Cases', 'Violin'],
//     },
//     {
//         firstName: 'Kristian',
//         lastName: 'Vos',
//         number: 'unknown',
//         likes: ['JavaScript', 'Gaming', 'Foxes'],
//     },
// ];

// function lookUpProfile(name, prop) {
//     // Only change code below this line
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             if (contacts[i].hasOwnProperty(prop)) {
//                 return contacts[i][prop];
//             }
//             return 'No such property';
//         }
//     }
//     return 'No such contact';
//     // Only change code above this line
// }

// lookUpProfile('Akira', 'likes');

// // generate random decimal number
// fucntion randomFraction(){
//     return Math.random();
// }

// genrate random whole number between 0 and 9
// function randomWholeNum() {
//     return Math.floor(Math.random() * 10);
// }
// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// function countdown(n) {
//     if (n < 0) {
//         console.log('Blastoff!');
//     } else {
//         console.log(n);
//         countdown(n - 1);
//     }
// }

// countdown(5);

// use recursion to create a range of numbers
// const rangeOfNumbers = (startNum, endNum) => {
//     if (startNum === endNum) {
//         return [startNum];
//     }
//     return [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
// };
// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     const newArray = [];
//     const row = [];
//     for (let i = 0; i < m; i++) {
//         // Adds the m-th row into newArray

//         for (let j = 0; j < n; j++) {
//             // Pushes n zeroes into the current row to create the columns
//             row.push(j);
//         }
//         // Pushes the current row, which now has n zeroes in it, to the array
//         newArray.push(row);
//     }
//     return newArray;
// }

// const matrix = zeroArray(3, 2);
// console.log(matrix);

// // create a 2-D array with m rows and n columns of zeroes
// function zeroArray(m, n) {
//     const newArray = [];
//     for (let i = 0; i < m; i++) {
//         const row = [];
//         for (let j = 0; j < n; j++) {
//             row.push(0);
//         }
//         newArray.push(row);
//     }
//     return newArray;
// }
// const matrix = zeroArray(3, 2);
// console.log(matrix);

// const EXPECTED_MINUTES_IN_OVEN = 40;

// function remainingMinutesInOven(30) {
//     return EXPECTED_MINUTES_IN_OVEN - 30;
// }

// function preparationTimeInMinutes(2)

// check number of users are online
// function countOnline(usersObj) {
//     // Only change code below this line
//     let count = 0;
//     for (const user in usersObj) {
//         if (usersObj[user].online) {
//             count++;
//         }
//     }
//     return count;
// }


