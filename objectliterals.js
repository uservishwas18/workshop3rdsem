// let name = "Vishwas";
// let rollNo = 123;

// let data = {
//     name,
//     rollNo
// }
// console.log(data.name);
// console.log(data.rollNo);

// let F = "Firstname";
// let L = "Lastname";

// let data = {
//     [F] : "Vishwas",
//     [L] : "Chaurasiya"
// }
// console.log(data.Firstname);
// console.log(data.Lastname);

let F="first"
let L="last"
let data={
    [F]:"Virat",
    [L]:"Kohli",

Show(){
    
console.log(this.first)
console.log(this.last)
    
}
};
console.log(data.Show())