//  console.log("Welcome HI")
// const name="Sujith"
// var age=19;
// if(age>18){
//     var name="Sujith V"
//     console.log(name);
    //  let name="Sujith V";
    // console.log(name);
    // const name="Sujith V";
    //  console.log(name);
// }
// console.log(name);

// var age=27
// console.log(typeof(age))

//Hoisting
// console.log(age);
// var age=23;

// var age="";
// console.log(typeof(age))

//Objeccts

// let employee={
//     name:"Sujith",
//     designation:"Junior Doctor",
//     salary:"12 LPA",
//     mobile:9039023902
// }


// console.log(employee)

//Array

// let employees=["Sujith","Swetha","Bhaaru"]
// console.log(employees[1])

//Alerts

// alert("Registration is completed")
// prompt("Enter user name")

// number1=prompt("ENter number")
// console.log(number1)

// confirm("Are u sure to exit?")

//console statements

// console.log("Swetha");
// console.info("For info");
// console.warn("check the code once");
// console.error("name is not defined");

//Spread Operators

// let external_marks=[23,45,67,80,64,90]
// let internal_marks=[20,20,17,14,18,19]

// let results=[23,34,external_marks]
// let final=[23,445,556,...external_marks,...internal_marks]
// console.log(results)
// console.log(final)
//rest parameter
// function add(x,y,...remainData){
//     console.log(x)
//     console.log(y)
//     console.log(remainData)
//     console.log(typeof(remainData))
// }

// console.log(add(19,19,45,56576,7877))

//Destructuring of Array
//  let employees=["Bhaaru","Divya","Swetha"]
// let name1=employees[0];
// let name2=employees[1];

// let[Bhaaru,Divya,...data]=employees
//  console.log(name1)
//  console.log(name2)

// console.log(data)
//Destructuring of object

//  let employee={
//     uname:"Sujith",
//      designation:"Junior Doctor",
//      salary:"12 LPA",
//      mobile:9039023902
//  }
//  let{uname,designation,...remainList}=employee;
//  console.log(uname);
//  console.log(designation);
//  console.log(remainList);


//Functions

// let demo=function(x,y){
//     return x+y
// }
// console.log(demo(3,4))

// (function(x,y){
//     return x*y
// })()

// setTimeout(function(){
//     console.log("Welcome")
// },3000)
// console.log(demo(3,4))
// Arrow function
// let demo= (x,y)=>{
//     return x*y
// }
// console.log(demo(3,4))

let employees=["Dhanush","Pavan","Harika","Bhaaru"]
// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }
// for-in
// for(let i in employees){
//     console.log(i)
// }
// for-of
// for (let i of employees){
//         console.log(i)
// }

//forEach()
//  let result=employees.forEach(function(element,index){
//        console.log(element+"ok")
//     })
   
//map()
// let result=employees.map(function(element,index){
//     return element+" k"+index
// })
// console.log(employees)
// console.log(result)

let result=employees.map((element,index)=>{
    return element+" k"+index
     })
    // console.log(employees)
     console.log(result)