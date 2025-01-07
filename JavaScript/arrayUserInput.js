let n= prompt("Enter size of the array : ");
let arr = [];
console.log("Enter array values");
for(let i=0; i<n; i++){
    arr[i]=prompt("Enter value for index "+i);
}
arr.forEach((val)=>{console.log(val)});
console.log(arr);