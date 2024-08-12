// console.log("Hello World");


// Hoisting  => Javascript me jo dicliricent hai usko utha kr ke top me le jaya jata hai, 

// Hoisting ka jo concept hai wo let ke case me kaam nhi krta hai , wo var ke case me kaam krta hai//

// console.log(x)       //=> Var 
// var x = 10;


// console.log(x)      //=> let
// let x = 10;


// Operator in JS

//1 => Arithmetic Operator [+ , - , * , ** , / , % , ++ , -- ]

// 2 => Assignment Operator [= , +=  , -= , *= , /= , %= , **= ]
 
// 3 => Comparison Operator [> , < , >= , <= , == , === , != ] 
// Comparion operator me output hamesa ya to  true aayega yato false aayega// Logical operator me bhi same output true / false

// 4 => Logical Operator [&& , || , ! ]  esme bhi output yato true ya false aayega

// && = Sare condision true hoge tabhi output true aayega.

// || = esme agr koi ek bhi condition true hai to output true aayega.

// ! = esme true ko false and false ko true bna deta hai.


//============ if , else if and else=================//

// var x = 10;

// if(x % 2 == 0)
// {
//     console.log("even");
// }
//  if(x%2 != 0)
// {
//     console.log("odd");
// }


// var x = 11;

// if (x%2 == 0)
// {
//     console.log("even");
// }
// else
// {
// console.log("Odd");
// }


// var x = 12;
// if(x>100)
// {
//     console.log("first");
// }
// if(x<2)
// {
// console.log("second");

// }

// else
// {
//   console.log("third");
// }


//=================else if===================//

// var x = 10;
// var y = 15;
// var z = 30;

// if(x>y && x>z)
// {
//  console.log(x ,"is greter");

// }
// else if(y>x && y>z)
// {
//     console.log(y, "is greter");
// }

// else(z>x && z>y)
// {
//     console.log(z, "is greter");
// }



//============== Loop in JS=====================//

// console.log("Hi");
// var x =0;
// while(x<3)
// {
//     console.log("Hello Wolrd!");
//     x++;
// }
// console.log("Bye");

//******************While loop****************************//  
// var x =2;
// var i = 1;

// while(i<=10)
// {
//     console.log(x,"x",i,"=",x*i);
//     i++;
// }


//=================For Loop ===========================//

// var x =6;
// for(var i=1; i<=10; i++)
// {
//     console.log(x,"x",i,"=",x*i);
// }


//=================do-while Loop ===========================//

// var i = 0;
// do{
//     console.log("hello",i)
//     i++;
// }while(i<3);



//=================function in js===========================//

//Example 1///
// function displayTable()
// {
//     for(let i = 0; i<=10;i++)
//     console.log(5,"x",i,"=",5*i);

// }
// console.log("hello");

// displayTable();


//Example 2//
// function sum (x,y)
// {
//     console.log("sum:", x+y);
// }

// console.log("Hello");
// sum(20,30); 
// var x = 7;
// console.log(x);
// sum(50,25);


//Example 3//
// function displayTable(y)
// {
//     for(let i = 1; i<=10; i++)
//     {
//         console.log(y,"x",i,"=",y*i);
//     }
// }
// var x= "Navneet";
// console.log(x);
// displayTable(9);

// let a = 7;
// console.log(a);
// displayTable(2);


//Example 4//

// function sum(x,y)
// {
//     var z = x+y;
//     return z;
    
// }

// console.log("hello");
// var res1 = sum(30,50);
// console.log(res1*2);
// var x = 15;
// console.log(x); 
// var res2 = sum(25,10);
// console.log(res2-5);
// console.log("hey Navneet");


//=================Arrow Function===========================//
//Example 1//

// const demo = ()=>
// {
//     console.log("hello");
// }
// demo();


//Example 2//

// const navneet =(x,y)=>
// {
//     return x+y;
// }
// let z = navneet(10,20);
// console.log(z);


//=================Object in JS===========================//

// const student = {
//     firstName:"Navneet",
//     lastName:"Mishra",
//     contact_No:9587444194
// }

// console.log(student);
// console.log(student.firstName);
// console.log(student["lastName"]);




//=================Array in JS===========================//

// const students = ["navneet","Moham","Aditya","Madhav","Roshan"]
// console.log(students[0]);


// const student = [
//     {
//         name:"navneet mishra",                                     // Objject ka array 
//         rollNo:11,
//         marks:95
//     },
//     {
//         name:"Yuvraj",
//         rollNo:12,
//         marks:90
//     },
//     {
//         name:"Kishor",
//         rollNo:10,
//         marks:98
//     }
// ]

// console.log(student);

// const data = [1,5,3,5,6,7,8,88,99,10];
// console.log(data.length);


//////.pup mathord**********//

// const student = ["navneet","ram","abhi","vikas","yash","aman"];
// console.log(student);
// student.pop();                                             // .pop() ka mtlb hai ki last ki value remove hoti hai
// console.log(student);


// //.PUSH("")last me koi value add krni ho to use krte hai ****************//
// const data = [1,2,5,88,56,10,325];
// console.log(data);
// data.push(100);                                             
// console.log(data);


//Slice()****//ye starting ki value ko hta krke uske baad ki value ko dikhata hai*******//
// const student = ["raj","abhi","hari","om","mannu"];
// // console.log(student.slice(2)); 
// const newstudent = student.slice(2);
// console.log(student);
// console.log(newstudent);


// .sort()methord ye agr sb ke sb "string ya number value" alphanumaric wise sort kr lena (jaise a wale phle aayenge , fir b, c, d es type se)**// 

// const students = ["manog","raghav","aman","ram","akash"];
// console.log(students.sort());

// const data = [1,5,2,7,8,9,4,3,0]
// console.log(data.sort());


// array ki kisi paticuar value ko replace kr skte hai(example - number [0] = 500;)
// const number = [85,88,20,1,2,8,93];
// console.log(number);
// number [0] = 100;
// console.log(number); 


//iterate in array(Particular array ki ek ek value ko check krte hai )***//

// const number = [85,25,63,95,40];
// number.forEach (function(value,index,array){ 
// console.log(value,index,array); 
// });


//map in array js**////
// map return krta hai ek new array (Return new array)

// const number = [1,5,3,6,8,9,10];
// const newNumber = number.map(function(value){
//     return value*2;
// })
// console.log(number);
// console.log(newNumber);


// const navneet = ["mohit","vikas","rahul"];
// const newNavneet = navneet.map(function(value){
//     return  "Mr" + value;
// })
// console.log(navneet);
// console.log(newNavneet);


// const data = [55,63,45,25,25,1];
// const newdata = data.map(function(value){
//     return value+2;
    
// })

// console.log(data);
// console.log(newdata);



//=================Oops in JS (Object Oriented Programming Concepts)===========================//
// constructor ek esa mathod(function) jb hm object create krte hai to automatic call ho jata hai//***//

// class student                     
// {
//     constructor()
//     {
//         console.log("object is created");
//     }
// }

// const s1 = new student();
// const s2 = new student();

 

// class student
// {
//     constructor(firstName,lastName)
//     {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }

//     displayFullName()
//     {
//         console.log(this.firstName + " "+ this.lastName);
//     }
// }

// const s1 = new student("navneet","mishra");
// const s2 = new student ("aman","kumar");
// s1.displayFullName();
// s2.displayFullName();



//=================String in JS ===========================//
//example-1//

// var text = "Hello World";
// var n = text.length
// console.log(text,n);

//example-2//
// var text = "Navneet Mishra";
// var test = text.toLowerCase();
// console.log(text.toLowerCase());

//example-3//
// var str = "welcome to js tutorial";
// var str1 = str.toUpperCase();
// console.log(str.toUpperCase());

//example-4//
// var x = "hello navneet mishra";
// console.log(x.slice(5));

//example-5//
// var x = "hello navneet mishra";
// console.log(x.slice(3,10));

//example-6//
// var x = "hello navneet mishra";
// console.log(x.slice(-4));

//example-7// trim mathord jo hai wo spaces ko remove kr deta hai***//
// var text = "     Hello Good Evening all of you       ";
// console.log(text.trim());

//example-8// trim end **//
// var text = "     Hello Good Evening all of you       ";
// console.log(text.trimEnd());


//example-9// trim start **//
// var text = "     Hello Good Evening all of you       ";
// console.log(text.trimStart());


//**************************/ */
//example-10//

// var num = 9.1456;
// console.log(num.toFixed(2));


//example-11// number ko string me convert krna//
// var num = 5698;
// var str = num.toString();
// console.log(str,typeof str );


// var str = "navneet";
// let output = str.split('').reverse().join('');
// console.log(output);



//=================Switch-Case in JS ===========================//
// example-1**// 

// switch(2)
// {
//   case 1 :
//     console.log("Hello");


//     case 2:
//       console.log("Hey");


//       case 3:

//       console.log("Buy");
// }


//examle -2**//

// let x = 1;
// switch(x)
// {
//   case 1 :
//     console.log("Hello");
//     break;

//     case 2:
//       console.log("Hey");
//        break;

//       case 3:
//       console.log("Buy");
//       break;

//       default:
//         console.log("hahahhahahahhahaah");
// }



//=================Asynchronous in JS ===========================//
// console.log("hi");
// setTimeout (function(){
//     console.log("hello");

// },3000);


//=================Callback in JS (function ke under me koi paramitter aa rha hai to use callback bolte hai)===========================//
// function loginUser(cb)
// {
//     console.log("logged in");
//     cb();
// }

// function displayUser()
// {
//     console.log("hey navneet");
// }

// loginUser(displayUser);



//=================promise in JS ===========================//
// let myPromise = new Promise((resolve, reject) =>
//  {
//     let x = 1;
//         if(x==1)
//         {
//             resolve("ok Done..");

//         }
//         else
//         {     
//           reject("Sorry");
//         }
    
// })

// myPromise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// const navneet = ()=>{

//     const x = 10;
//     return new Promise((resolve,reject)=>{
//         if(x==10)
//         {
//             resolve("Promse resolved!");
//         }
//         else
//         {
//             reject("Not Resolved!..");
//         }
//     })
// }

// navneet().then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// })



//=================Async-await in JS ===========================//

function login(username,password)
{
    return new Promise((resolve,reject)=>{
        console.log("login is working");
        if(username == "navneet" && password== "12345")
        {
           resolve(username);
        }
        else
        {
            reject("Invalid username & password");
        }
    })
}

function displayData(username)
{
    return new Promise((resolve, reject) => {
        console.log('displaying Data');
        resolve("hello "+ username);

    })
}

// login("navneet","12345").then((data)=>{
//     console.log(data);
//     displayData(data).then((res)=>{
//         console.log(res);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })

// async function doThis()
// {
//     try
    
//     {
//         const data = await login("navneet","12345");
//         console.log(data);
//         const res = await displayData(data);
//         console.log(res);
//     }
//     catch(err)
//     {
//       console.log(err);
//     }
// }

// doThis();
