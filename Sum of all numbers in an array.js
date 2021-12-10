//Sum of all numbers in an array
var sum=(arr)=>{
    return arr.reduce((a,b)=>a+b)
}
var arr=[1,2,3,4,5]
console.log(sum(arr))