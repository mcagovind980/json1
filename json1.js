
// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>
// {
//     return response.json()
// }).then((result)=>{

//     console.log(result);
    
// }).catch((err)=>{
//     console.log(err);
    
// })



// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         const result = await response.json();

//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getUsers();



// let formData={
//     name:"manas",
//     email:"mana@gmail.com",
//     password:"1234",
//     subject:"mern"
// }
// fetch("https://jsonplaceholder.typicode.com/users",{

// method:"POST",
// header:{

//     "contect-type":"Application/json"
// },
// body:JSON.stringify(formData)//this part is most important 

// }).then((response)=>
// {
//     return response.json()
// }).then((result)=>{

//     console.log(result);
    
// }).catch((err)=>{
//     console.log(err);
    
// })



// const person1= {
//     name:"John"
// }
// const person2= {
//     name:"Paul"
// }
// const person3= {
//     name:"Ringo"
// }
// const person4= {
//     name:"Ram"
// }
// function greet(greet){
//     return greet + " " + this.name;
// }
// let mes=greet.apply(person1,["ram"]);
// console.log(mes);


// const person1={
//     firstName:"john",
//     lastName:"Doe"
// }
// const person={
//     fullName:function()
//     {
//         return this.firstName+ " " +this.lastName
//     }
// }
// let name=person.fullName.apply(person1)
// console.log(name);

// const person1={
//     firstName:"john",
//     lastName:"Doe"
// }
// const person={
//     fullName:function()
//     {
//         return this.firstName+ " " +this.lastName
//     }
// }
// let name=person.fullName.apply(person1)
// console.log(name);


// const person={
//     fullName:function(city,country)
//     {
//         return this.firstName +" "+this.lastName +","+city +","+ country;
//     }
// }
// const person1=
// {
//     firstName:"Mary",
//     lastName:"Doe"
// }
// const person2={
//     firstName:"john",
//     lastName:"dow"
// }
// let k=person.fullName.apply(person1,["oslo","norway"])

// console.log(k);

//   const person={
//     fullname:function(city,country)
//     {
//         return this.firstName +" "+this.lastName+","+city+","+country;

//     }
//    }
//    const person1={
//     firstName:"john",
//     lastName:"Doe"
//    }

//   const person2={
//     firstName:"mary",
//     lastName:"Doe"
//     }

//    let op=person.fullname.apply(person1,["ram","norway"])
//    console.log(op);


// const person={
//     fullname:function(city,country)
// {
//     return this.firstName +" "+ this.lastName+","+city+","+country
// }
// }
//  console.log(person.fullname("ram","ram"));

// let o={
//     firstName:"Govind",
//     lastName:"kumar"

// }
// let q=person.fullname.call(o,"rt","er")
// console.log(q);


//   const numbers=[4,6,7,8,1];
  
//   let i=Math.max.apply(numbers);
  
//   console.log(i);
//   let a=4;
// function my()
// {
  
//     return a*a;
// }                
// console.log(my());

// function my()
// {
//     let counter=0;
//     return function()
//     {   counter++;
//         return counter;
//     };
//    } 
// const add=my();
// add()
// add()
// add()
// console.log(add());



// let result;
// setTimeout(function()
// {
//     // result=5;
//     console.log("hello");
//     console.log("world hello");
    
// },5000)

// console.log(result());

// setTimeout(function()


// {
//     my("there is a car");
// },4000
// )
// function my(item)
// {
//     console.log(item);
    
// }

// setInterval(my,1000);
// function my()
// {
//     let d=new Date();
//     document.getElementById("demo").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
// }


// function dis()
// {
//     document.getElementById("demo").innerHTML=date();
// }
// document.getElementById("myb").addEventListener("click",dis);

// function displayDate() {
//  document.getElementById("demo").innerHTML = Date();
//  }
//  document.getElementById("myButton").addEventListener("click", displayDate);

// function myDisplayer(some) 
// {
//   document.getElementById("demo").innerHTML = some;
// }

// Function to calculate a sum
// function myCalculator(num1, num2)
//  {
//   let sum = num1 + num2;
//   return sum;
// }

// Call the calculator
// let result = myCalculator(5, 5);

// Call the displayer
// myDisplayer(result);


// function d(some)
// {
    // document.getElementById("demo").innerHTML=some;
//      console.log(some);
// }
// function C(num1,num2,call)
// {
//     let sum=num1+num2;
//     call(sum);
// }
// call(5,5,d);

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// // Function to calculate a sum
// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);




// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>
// {
//     return response.json()
// }).then((result)=>{

//     console.log(result);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// let formData={
//     name:"manas",
//     email:"mana@gmail.com",
//     password:"1234",
//     subject:"mern"
// }




// function submitData()
// {
//   let name=document.getElementById("name").value
//   let email=document.getElementById("email").value
//   let password=document.getElementById("password").value
//   let subject=document.getElementById("subject").value


// let formData={
//     name:name,
//     email:email,
//     password:password,
//     subject:subject

// }}
// // console.log(formData);


// fetch("https://jsonplaceholder.typicode.com/users/",{

// method:"POST",
// header:{

//     "contect-type":"Application/json"
// },
// body:JSON.stringify(formData)

// }).then((response)=>
// {
//     return response.json()
// }).then((result)=>{

//     console.log(result);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// function submitData() {

//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let subject = document.getElementById("subject").value;

//   let formData = {
//     name: name,
//     email: email,
//     password: password,
//     subject: subject
//   };

//   console.log(formData);

//   fetch("https://jsonplaceholder.typicode.com/users/", {

//     method: "POST",

//     headers: {
//       "Content-Type": "application/json"
//     },

//     body: JSON.stringify(formData)

//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {

//       console.log(result);

//     })
//     .catch((err) => {
//       console.log(err);

//     });
// }

//   fetch("https://jsonplaceholder.typicode.com/users/", )
// {

// //  body: JSON.stringify(formData)

// }
// function getData() {

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {

//       console.log(data);

//       // Example: show data in browser
//       data.forEach((user) => {
//         console.log(user.name);
//       });

//     })
//     .catch((error) => {
//       console.log(error);
//     });

// }
// getData()


 // async function getData()

  //  {

  //   let response=await fetch("https://jsonplaceholder.typicode.com/users")
  //   let result =await response.json()
  //   console.log(result);
  
  //   }
 
  // getData();


  



function createCounter() {
 let count = 0; 

  return function () {

    count++;
    return count;
    };
 }

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

console.log(counterB()); // 1
console.log(counterB()); // 2

console.log(counterA()); // 4


