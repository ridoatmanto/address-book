// console.log(10 + 20);

// const data = [1, 2, 3];
// data.forEach((item) => console.log(`Hello ${item}`));

// // Any modules that include this will wait for the fetch
// // to resolve before running any code
// const res = await fetch("https://api.belo.app/public/price");

// if (res.ok) {
//   const data = await res.json();
//   console.log(data);
// }

// console.log("this");
// console.log(this);
// console.log("process");
// console.log(process);
// console.log("process.env");
// console.log(process.env);
// console.log("process.env.USER");
// console.log(process.env.USER);

/**--- */
console.log("1" == 1);
console.log("1" === 1);

console.log("a" > "Z");

const year = "2024";
// if (Number(year) === 2023) console.log("You are correct!");

const currentYear = Number(year);
if (currentYear < 2024) {
  console.log("Too early!");
} else if (currentYear > 2024) {
  console.log("too long");
} else {
  console.log("Exactly!");
}

const current = currentYear > 2023 ? true : false;
console.log("STATUS " + current);

const guess = "5";
switch (guess) {
  case "1":
    console.log("Number 1");
    break;
  case "2":
  case "3":
    console.log("Number 2 and 3");
    break;
  default:
    console.log("might another number");
}
let counter = 1;
while (counter < 5) {
  console.log("counter " + counter);
  counter++;
}

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log("iteration " + i);
}

for (let i = 1; i < 10; i++) {
  if (i === 7) break;
  console.log("break " + i);
}

setTimeout(function () {
  console.log("Hello");
}, 3000);

setTimeout(() => {
  console.log("Yuppp!");
}, 3000);

// setInterval(() => {
//   console.log("Stand By");
// }, 3000);

localStorage.setItem("test", "test value");
localStorage.setItem("testNumber", 123);

const test = localStorage.getItem("test");
console.log(test);
const testNumber = localStorage.getItem("testNumber");
console.log(testNumber);

localStorage.clear();
console.log("test ", localStorage.getItem("test"));
