/**
 * let ,const , var (concept)done
 */


/**Template Sring (concept done) */

// Destructuring for objects (important)

/**let student = {
    name: 'Ammar',
    grade: '1 semester',
    id: 'bc240209040',
    email: 'ammar69aa59@gmail.com',
    university: {
        title: 'Virtual University of Pakistan'
    },
};
const { name, grade, id, email , university:{title} } = student;
// const {title} = university //Alternate method to do this is
console.log(name);
console.log(grade);
console.log(id);
console.log(email);
console.log(title);
**/


// Destructuring in array
/**let arr = ['Ammar', 'Maham', 'Pasha'];
const [a, b, c] = arr;
console.log(a, b, c); // Outputs: 'Ammar' 'Maham' 'Pasha'
console.log(a);       // Outputs: 'Ammar'
console.log(b);       // Outputs: 'Maham'
console.log(c);       // Outputs: 'Pasha'
(This is not commonly used in feild instead of this we can use loops to iterate each value exists in arr)
 **/


// Default + Rest + Spread operators
// 
// function foo(a, b /** = 4*/) {
//     return a * b
// }
// // if one arfument is missed so log NaN 
// //but to handle this type of situation we can assign the value to parameters    
// console.log(foo(2,));

// Rest Operator

/**function foo(...rest){
    console.log(rest);
}
foo('ammar' , 'ahmed', 'ali', 'pasha')*/

// Spread Operator

let obj = {
  name: "Ammar",
  id: 'bc240209040'
}
let obj1 = {
  grade: '1 semester',
  enroll: 'Computer Science'
}

/**for (const key in obj1) {
    obj[key] = obj1[key];
    console.log(obj[key]);
    //Yahn pr ye kam horha ha
    /**obj.grade
    obj.enroll
    
}
console.log(obj);*/

// Alternate way to do this is from spread operator
/**let merge ={
    ...obj,
    ...obj1
};
console.log(merge);*/

/**var object = {
    name: 'ammar',
    school:{
        title : 'smit'
    }
};
let object1 = JSON.parse(JSON.stringify(object));

let object2 = {...object1 };
object2.name = 'Ghous';
let object3 = {...object2};
object3.name = 'ahmend'

// console.log(object)
 console.log(object1);
console.log(object2)
console.log(object3);
*/

/**let start = document.getElementById('start');
let para = document.getElementById('para');
let timer = 0;
let play = false;
let intervalId;
start.addEventListener('click', () => {
    if (play) {
        clearInterval(intervalId);
        play = false;
        event.target.innerHTML = 'Start Counting'
    } else {
        intervalId = setInterval(() => {
            para.innerHTML += '<br>'+timer++;
            para.style.fontSize = '40px'
        }, 1000);
        play = true
        event.target.innerHTML = 'Stop Counting'
    }
})**/;

//It is asynchronous code
//means ke agr upar wali line ko chlne mei time lag rha ha to iske neeche wali line chal jaye gi
// let a = setTimeout(function(){
//     let greeting = 'I love you !! ;'
//     againCall(greeting);
// },3000)

// function againCall(greeting){
// console.log(greeting);
// }
// function execute(executionCode) {
//     executionCode()
// }
// execute(function () {
//     console.log('I again execute all this by calling parameter ');
// });


/**Here we have http methods
 * 1 )GET
 * 2 )POST
 * 3 )DELETE
 * 4 )PUT
 * 5 )PATCH
 */
// Basically fetch method gives us 2 methods .then & .catch
//.then() works like if the data is in the api then it will return all the objects present in
//.catch() works like if data not there in the api it will throw error
// function getData(){
//   let arr=[]
//   arr.push( new Promise (function(resolve,reject){
//     fetch('https://fakestoreapi.com/products')
//     //now convert to json format
//     .then(function(response){
//       return response.json()
//     })
//     // first reslove it then convert to json format (readable format)
//     .then(function(response){
//       resolve(response)
//     })
//     .catch(function(err){
//       reject(err)
//     })
//   }) ,
//   new Promise(function(resolve,reject){
//     fetch('https://fakestoreapi.com/products/categories')

//     .then(function(response){
//       return response.json()
//     })

//     .then(function(response){
//       resolve(response)
//     })
//     .catch(function(err){
//       reject(err)
//     })
//   })
// )
// Promise.all(arr)
// .then(function(data){
//   console.log('data', data);
// })
// .catch(function(err){
//   console.log('err', err);
// })
// // console.log(arr);
// }
//  getData()
// .then(function(data){
//   console.log('data maipulated', data);
// })
// .catch(function(err){
//   console.log('Error', err);
// })

//Shorhand tareka ES6//
// let promise = new Promise(function (resolve, reject) {
//   resolve(fetch('https://fakestoreapi.com/products'))
// })
// async function getData() {
//   try {
//     let response = await promise;
//     let readable = await response.json()
//     console.log('data successfully fetched!!!', readable);
//   }
//   catch (error) {
//     console.log('Fetching Error', error);
//   }
// }
// getData()


// Array methods
let arr = [
  { name: 'Rizwan', class: 'Sir' , points :1000},
  { name: 'Mustafa', class: 'Student',points :700 },
  { name: 'Fuzuail', class: 'Assembly Monitor',points :300 },
  { name: 'Raffay', class: 'Class Monitor',points:400 },
  { name: 'Raffay', class: 'Break Monitor' ,points:600},

];

//Sort Method
let resul = arr.sort((a ,b)=>{
  return b.points - a.points
});
console.log(resul);





//reduce method 
// let result =arr.reduce((a,v,index)=>{
//   return a + v.price;
// },0);
// console.log(result);




//find 
// let result = arr.find((data, index) => {
//   return  data.name === 'Raffay'
// });
// console.log(result);
//filter same names aur words ko check krne ke liye istemal krte hain ke exist krta ha vo ya nhi
// let res = arr.filter((data, index) => { return data.name === "Raffay" }
// )
// console.log(res);
//map helps to return the object data into array form and also pushes
// let result = arr.map((data, index) => {
//   return `Hello how are you ${data.name}`
// })
// console.log(result);


//forEach is normal loop which except two params.. (data,index)
// arr.forEach((data, index) => {
//   console.log(data, index);
// });

