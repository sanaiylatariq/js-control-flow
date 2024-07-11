// // control flow in js
// //if
// if (4<5){
// console.log(`yes its bthat easy`);

// }
// let temp = 40
// if(temp >50){
// console.log(`yes its less than 50`);
// }else{
//     console.log("no the twmp is less  than 50");
// }
// console.log("temp is 50");
// // es console log ka if statement sy lena dena nh hay
// if(56*67==6546){
// console.log(`yes it works`);
// }else{
//     console.log("yes the multiplier is very big");
// }



// if(5*5<=25){
// console.log(`yes its 25`);
// }
// // <=,>= esy write kro,!= is not equal to, == for equal yani ye string m 2 r wdout string 2 ko equal maanay ga ,=== datatrype chk karny k lye hta hy
// if(2!=3){
//     console.log(`yes 2 is not equal to three`);
// }
// if(2=="2"){
//     console.log("helllo")
// }
// // yani values equal
// if(2==="2"){
//     console.log("helllo2")
// }
// // datatypes not equal one is string aother is number
// if(2!=3){
//     console.log(`waaah`);
// }

// if(2===2){
//     console.log("yes its if statement")

// } else {
//     console.log("its else statement");
// }
// console.log("hurray i now know about if else statements");
// let score = 101
// if(score>100){
// let power = "fly"
// console.log(`yes my score is ${score} and my power is ${power}`);
// }
// jo chz block scope k andr hogi wo braces k bahar ap access nh krskty lkin var use kar k krskty jo k global scope hta hay for a time being error nh aega but aagay ja k msla hopga
// // console.log(`yesss i shave many heads and ${power} high`);
// let balance  = 2000
// if (balance==1000) {
//     console.log("equal to hzaar");
// }else if (balance<1500) {
//     console.log("less tham 1500");
// }else if(balance<1800){
//     console.log("less than 1800");
// }else{
//     console.log("balance is not less than 1800");
// }


// let userloggedin = true
// let debtcard = true
// if (userloggedin && debtcard && 2==2 && 2!="22" && 3!=4) {
//     // and and used for two vars, u  can use  multiple ands 
//     console.log("allow access");
// }
// let loggedinfromgoogle = true
// let loggedinfromemail = false
// // || key used k kisi b ek case ka true hay to access kardo allow
// if (loggedinfromemail || loggedinfromgoogle || debtcard) {
//     console.log("allow acces either way");
// }
// if (2==2||2==="2") {
//     console.log("either allowed");
// }





////////////////                  switch              ////////////////


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
// switch (month) {
//     case 1:
//         console.log("january");
//         break;

//         case 2:
//             console.log("feb");
//             break;
//             case 3:
//                 console.log("march");
                 
                
                
                
                // jahan par value match hwa usk bad cpde break ki absence main sara read hoga swae default k if break added to match k bd code read nh hoga 




                // break;
//                 case 1:
//                     console.log("april");
//                     break;
                        
//         default:console.log("default value");
//         break;
// }                                      
// let score = "sanaiyla"
// switch (score) {
//     case "sunny":
//         console.log("sunny");
//         break;

//         case "sanaiyla":
//             console.log("sanaiyla");
//             break;

//             case "kato":
//                 console.log("kato");
//                 break;
        
//         default:
//         break;
// }
// // value ko value m loikhen chaahy string hy ya number ya boolean
// let logged = true
// switch (logged) {
//     case false:
//         console.log("false");
//         break;

//         case true:
//             console.log("true");
//             break;
//             case null:
//                 console.log("null");
//                 break;
            
//         default:
//         break;
// }


// // number string and boolean used
// let useremail = "sunny@google.com"
// if (useremail) {
//     console.log("have user email");
// }else{
//     console.log("dont have email");
// }

 
// // agr koi value hay to default true mana jaega            







// let useremail1 = ""
// if (useremail1) {
//     console.log("have user email");
// }else{
//     console.log("dont have email");
// }
// // agr empty hy to default false mana jaega
// // empty array ko true while empty string ko false manty hen
// let sunny = []
// if (sunny) {
//     console.log("have user email");
// }else{
//     console.log("dont have email");
// }



// // falsy values
// // "", undefined, null, false, 0, -0, BigInt 0n, Nan,    all are falsy values or assumed as false



// // truthee values
// // [],"0",{},function(){}," ", 'false', '0',     all are truthy values
// // if (function(){}) {
// //     console.log("hello i am an empty function");
// // }
// let sanaiyla = []
// if (sanaiyla.length===0) {
//     console.log("array is empty");
// }
// // property call kr k b ap if statement use karskty ho
// let sunny1 = {}
// if (Object.keys(sunny1).length===0) {
//     console.log("empty obj");
// }
// // empty obj ki length chk krny k lye ap obj.keys us obj ka nam dot length === 0
// Object.keys(sunny1).length
// let sanaiyla1 = {
//     nam1:"kato",
//     id:"6435"
// }
// console.log(sanaiyla1.id);
// if (sanaiyla1.length==35) {
//     console.log("tte id matches");
// }
// let dani = {
//     naam:"daniyal"
// }
// if (dani.naam=="daniyal") {
//     console.log("his name is adni");
// }

// let obj = {}
// if (Object.keys(obj).length==0) {
//     console.log("empty hay yaara");
// }
// let array1 = []
// if (array1.length==0) {
//     console.log("empty arrayhay yara");
// }
// if (obj) {
//     console.log("emptyyyyyyyy");
// }
// if (array1) {
//     console.log("emptyyarray");
// }



// practice
// let sunny = {}
// if (Object.keys(sunny).length==0) {
//     console.log("hello");
// }
// let array1 = []
// if (array1.length==0) {
//     console.log("hello2");
// }
// let sunny2 = 0
// if (sunny2) {
//     console.log("hello3");
// }
// if (true==`0`) {
//     console.log("yes false equals zero");
// }
// let me = 1
// if (me==true) {
//     console.log("me equals false");
// }else{
//     console.log("zero is not false");
// }


// nullish coalescence operator(nco)


// works for null and undefined k agr null value ho to usko double safety chk kea jae 
// let val1;
// val1 = null ?? 15
// val1 = undefined ?? 10
// console.log(val1);
// val1 = 10??15
// agr dono values mentioned hon to phli value assume ki jaega wrna null and undefined ki presence main asl value
val4 = null ?? 10 ?? 20
// first value assume ki jaega
console.log(val4);


// terniary opeerator
// condition ? true:false
let price = 100
price >20 ? console.log("greater than 20"): console.log("less than 20");

let sunny = []
sunny.length==0 ? console.log("yes its zero length"):console.log("no length is more");

let sunny1 = {}
Object.keys(sunny1).length==0 ? console.log("yes zero obj length"):console.log("obj length not zero");
