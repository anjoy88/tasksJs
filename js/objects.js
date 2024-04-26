// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for(const key in apartment){
//   keys.push(key); // ключі
//   values.push(apartment[key]); // значення властивостей
// }



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for(const key of keys){
//     values.push(apartment[key]);
//     console.log(values);
// }

// function countProps(object) {
//   let propCount = Object.keys(object);;
//   return propCount.length;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500, scope: 500 })); // 4
// console.log(countProps({ name: "Mango", age: 2 })); // 2

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let salary = Object.values(salaries);
//     for(let key of salary){
//       totalSalary += key
//     }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
//     console.log(hexColors);
//     console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];


//     for (let i = 0; i < products.length; i++ ) {
//         console.log(products.length)
//         if (products[i].name === productName) {
//             return products[i].price;
//         }
//     }
//     return null;
// }

// console.log(getProductPrice("Scaner")); //2700

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let productName = [];
//     for (let product of products) {
//         if (propName === 'name') {
//             productName.push(product.name)
//         } else if (propName === 'quantity') {
//             productName.push(product.quantity)
//         }
//          else if (propName === 'price') {
//             productName.push(product.price)
//         }
//         }
//     return productName;
//     }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("name"));


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let productName = [];
//     let tottalName = 0;
 
//     for (let product of products) {
//         tottalName = Object.keys(product);
//         if (tottalName.includes(propName)); {
//             // console.log(product.name);
//         }
//     }
//     return products.name;
//     }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("name"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let totalPrice = 0;
//     for (const product of products) {
//         if (productName === product.name) {
//             totalPrice = product.price * product.quantity;
//             return totalPrice;
//         }
//     }
//     return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Pistolet)"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("name"));

// const atTheOldToad = {
//   potions: [],
//     getPotions() {
//      return "List of all available potions";
//     },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// }

//  const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for(let potion of this.potions){
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());


// rest
// let tottalSum = 0;
// function add(...args) {
//     for (let arg of args) {
//         tottalSum += arg;
//     }
//     return tottalSum;
// }

// console.log(add(12, 4, 11, 48)); //75
// console.log(add(32, 6, 13, 19, 8)); //78



// let totalSum = 0;
// function addOverNum(value, ...args) {
//     for (let arg of args) {
//         if (arg > value) {
//             totalSum += arg;
//         }
//     }
    
//     return totalSum;
// }

// console.log(addOverNum(50, 15, 27));//0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));//71
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));//218


//spread
// const temps = [14, -4, 25, 8, 11];
// 14 -4 25 8 11  набір окремих чисе
// console.log(...temps);


// let result = {};
// function getExtremeScores(scores) {
//     let best = Math.max(...scores);
//     let worst = Math.min(...scores);
//     result = {best, worst};
//     return result;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));//{ best: 81, worst: 4 }


// Створення масиву

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Створення об'єкта
// Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};
