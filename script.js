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

var object = {
    name: 'ammar',
    school:{
        title : 'smit'
    }
};
let object1 = JSON.parse(JSON.stringify(object));

let object2 = {...object1 };
object2.name = 'Ghous'
console.log(object)
 console.log(object1);
console.log(object2)
