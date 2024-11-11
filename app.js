// // Task 1

// function randomNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(Math.trunc(Math.random() * 100));
//     }, 1000);
//   });
// }
// async function fetch() {
//   let number1 = await randomNumber();
//   console.log(number1);
//   let number2 = await randomNumber();
//   console.log(number2);
//   let number3 = await randomNumber();
//   console.log(number3);
// }
// fetch();

// // Task 2

// function sentAnyMessage(msg) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (msg) {
//         resolve("Xabar yuborildi!");
//       }
//       reject("Xatolik: Yuborib bo'lmadi");
//     }, 3000);
//   });
// }
// let message = "Hello world";
// async function fetch() {
//   let req = await sentAnyMessage(message);
//   console.log(req);
// }
// fetch();

// // Task 3

// async function showProgress() {
//   let progress = 0;

//   while (progress < 100) {
//     progress += 20;
//     console.log(`${progress}%`);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }
// }

// showProgress();

// // Task 4

// function timerPromise(num) {
//   return new Promise((resolve) => {
//     let current = 1;
//     const interval = setInterval(() => {
//       console.log(current);
//       current++;

//       if (current > num) {
//         clearInterval(interval);
//         resolve();
//       }
//     }, 1000);
//   });
// }

// async function timer(n) {
//   await timerPromise(n);
// }

// timer(5);

// // Task 5

// function mathOperations(number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       number *= 2;
//       console.log(number);
//       setTimeout(() => {
//         number += 10;
//         console.log(number);
//         setTimeout(() => {
//           number /= 2;
//           console.log(number);
//           resolve(number);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   });
// }

// async function calculate() {
//   await mathOperations(5);
// }

// calculate();

// // Task 6

// function toSquare(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num);
//     }, 1000);
//   });
// }

// async function squareAll(arr) {
//   const result = await Promise.all(arr.map(toSquare));
//   console.log(result);
// }
// squareAll([2, 3, 4]);

// // Task 7

// function affirmative(time = 1) {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.trunc(Math.random() * 100);
//     setTimeout(() => {
//       if (randomNumber < 50) {
//         resolve("Ha");
//       } else {
//         reject("Yo'q");
//       }
//     }, time * 1000);
//   });
// }

// async function fetch(time) {
//   try {
//     const req = await affirmative(time);
//     console.log(req);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetch(5);

// // Task 8

// function doubleNumber(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num * 2);
//     }, 1000);
//   });
// }

// async function doubleNumbers(numbers) {
//   for (const num of numbers) {
//     const result = await doubleNumber(num);
//     console.log(result);
//   }
// }

// doubleNumbers([1, 2, 3, 4]);

// // Task 9

// function createRandomPromise(name) {
//   const randomDelay = Math.trunc(Math.random() * 5);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${name} g'olib bo'ldi!`);
//     }, randomDelay);
//   });
// }

// async function racePromises() {
//   const promises = [
//     createRandomPromise("Promise 1"),
//     createRandomPromise("Promise 2"),
//     createRandomPromise("Promise 3"),
//   ];
//   const winner = await Promise.race(promises);
//   console.log(winner);
// }
// racePromises();

// // Task 10

// function addition(num1, num2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num1 + num2);
//     }, 2000);
//   });
// }

// async function calculation(num1, num2) {
//   const result = await addition(num1, num2);
//   console.log(result);
// }
// calculation(3, 5);

// // Task 11

// function validationPromise(login, password) {
//   return new Promise((resolve, reject) => {
//     if (login.length < 3 && password.length < 6) {
//       reject("Xato: Login 3, Parol 6 belgidan kam bo'lmasligi kerak!!!");
//     } else if (login.length < 3) {
//       reject("Xato: Login 3 belgidan kam bo'lmasligi kerak!!!");
//     } else if (password.length < 6) {
//       reject("Xato: Parol 6 belgidan kam bo'lmasligi kerak!!!");
//     } else {
//       resolve("Kirish muvaffaqiyatli!");
//     }
//   });
// }

// async function validation(login, password) {
//   try {
//     const result = await validationPromise(login, password);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// validation("ali", "12345");

// // Task 12

// function countdownPromise(num) {
//   return new Promise((resolve) => {
//     const interval = setInterval(() => {
//       console.log(num);
//       num--;

//       if (num < 0) {
//         clearInterval(interval);
//         resolve();
//       }
//     }, 1000);
//   });
// }

// async function countdown(n) {
//   await countdownPromise(n);
// }

// countdown(5);
