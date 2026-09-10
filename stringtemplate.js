// let FirstName = "Vishwas";
// let LastName = "Chaurasiya";
// console.log("My First Name:"+ FirstName);
// console.log("My Last Name:"+ LastName);
// console.log(`My Firstname is : ${FirstName}`);
// console.log(`My name is : ${FirstName} ${LastName}`);

// let FirstName = "Vishwas";
// let LastName = "Chaurasiya";
// function FullNmae(First,Last){
//     return `${First} ${Last}`;
// }
// let Name = `Hell ${FullNmae(FirstName,LastName)}`;
// console.log(Name);

// Arrow function
// function Hello() {
//     console.log("Hello Vishwas");
// }
                //  |
                //  |
                //  |
                //  |
                //  >

// Hello = () => console.log("Hello Vishwas");
// Hello ();

// Physics = () => console.log("Physics is the study of matter and energy");
// Physics ();

// let pattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";

//         for (let j = 1; j <= i; j++) {
//             row += j + " ";
//         }

//         console.log(row);
//     }
// };

// function sum( ... values) {
//     let total = 0;
//     for (let n of values) 
//         {
//             total += n;
//         }
//     return total;
// }

// console.log(sum(5,7,8));

// function sum(name,...values) {
//     let total = 0;
//     for (let n of values) 
//         {
//             total += n;
//         }
//     return total;
// }

// console.log(sum("name : Vishwas",5,7,8));

// function sum( name,...values){
//     let total=0 
//     for(let n of values){

//         total=total+n;

//     }
//     console.log("name:",name)

// console.log("total:",total)

// }
// console.log (sum( "Vishwas",3,4,5,4));

// function sum(...values) {
//     let sum = 0;
//     // for (let i = 1; i < values.length; i++)
    
//     for (let i in values) {
//         sum = sum + values[i];
//     }
//     console.log(sum);
// };
// let arr = [1, 2, 3, 4, 5];
//     sum (...arr);
//     arr.push(6);
//     sum(...arr);
//     arr.pop();
//     sum(...arr);
//     // arr.clear = function () {
//     //     this.length = 0;
//     // }
//     // console.log(arr);

//     var arr1 = [1, 2, 3, 4, 5];
//     var arr2 = [6, 7, 8, 9, 10];
//     var arr3 = [...arr1, ...arr2];
//     console.log(arr3);


