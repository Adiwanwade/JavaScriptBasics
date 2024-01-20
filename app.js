// console.log('hello world Again');
// var name='My name';
// let name1='Aditya';
// const CITY='nagpur';
// console.log(name);// deprecated thing
// const myObject={
//     name:'Aditya',
//     age:45,
//     city:'Nagpur',
// };
// console.log(myObject.name);
// const label=`This is sample ${myObject.name}`;
// const label1=`This is sample ${myObject.name}`;
// console.log(label1);


// creating classes

//  class Person{
//     constructor(){
//         console.log('Constructor called');
        
//     }
//     show(){
//         console.log('Show is called');
//         console.log(`My name is ${this.name}`);
//     }
//  }
//  const P1=new Person();
// s1=P1.show(); wrong way of doing this
//s1=P1.show;
// s1() // show error

// const myobj={
// name:'Aditya',
// }
// s1.call(myobj)


    // s1.call({
    //     name:'Aditya',
    //     })



    // Closure
//     const addMe= function(num1){
//         return function(num2){
//             return function(num3){
//                 return num1+num2+num3;
//             }
//         }
//     }
//     let add1=addMe(1)(2)(3);
 
//     console.log(add1);
//     console.log(addMe(1)(2)(3));

    // 
//     function doThis(name){
//         console.log(`Name is called ${name}`);
//     }

//     doThis('Aditya');

    //Other way 
//    ( function doThis(name){
//     console.log(`Name is called ${name}`);
// })('Ganesha');


// const Person=(()=>{
//     return{
//         name:'Ganesha',
//         relation:'Everything',
//     }
// })();

// console.log(Person);

// const Person1=(()=>{
//     return{
//         getname:()=>{
//             return myName;
//         },

//         setName:(name)=>{
//             myName=name;
//         },
//     };
// })();

// Person1.setName('Aditya');
// console.log(Person1.getname());

//IIFE -Immediately invoked Function

// Spread Operator = ...(three dots)

const array=[1,2,34,5];
console.log(array);


const array1=[...array,51,78];
console.log(array1);

function add(n1,n2,n3,n4){
    return n1+n2+n3+n4;
}
console.log(add(...array1));

const city=['Nagpur','USA'];
const city1=['Jammu Kashmir'];
const cityAll=[...city,...city1];
console.log(cityAll);

// Rest operator

function sum(...ArrayNum){
    let sum=0;
    ArrayNum.forEach(element => {
        sum=sum+element;
    });
    return sum;
}
console.log(sum([1,3,45]));
console.log(sum(1,3,45));









