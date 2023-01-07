/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];



/*
function PrintDeveloperswithMap() {
  // console.log all the employees who have the profession of a developer using the map function.
}


  // console.log all the employees who have the profession of a developer using the for each function.
arr.forEach(PrintDeveloperbyForEach);
function PrintDeveloperbyForEach(item)
 {
console.log(item);
 }
*/
function addData() {
  //, make another such employee object and append that to this array given below and then console.log it. (15 Marks)
let obj1= { id: 5, name: "dj", age: "25", profession: "disc jokey" }
  arr.push(obj1);
  console.log(arr);
}

function removeAdmin() {
  //remove the object where the profession is admin. console.log the changed array. 
 arr.splice(2,1);
 console.log(arr);
}

function concatenateArray() {
  // Make another array with 3 objects just like the one in the above-given array. The objects should be different,
  // with different ids, and all other parameters should be different too. 
  //Then concatenate these 2 arrays and console.log.
  let arr1 = [
    { id: 3, place: "delhi", pin: "402", landmark: "school" },
    { id: 4, place: "mumbai", pin: "302", landmark: "hospital" },
    { id: 5, place: "kolkata", pin: "607", landmark: "metro" },
  ];
  
 let newarray = arr.concat(arr1);
 console.log(newarray);
}
