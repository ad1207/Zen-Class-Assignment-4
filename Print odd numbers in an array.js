//Print odd numbers in an array
var odd=(arr)=>{
    let ans=arr.filter(x => x%2==1)
    return ans
}
let arr=[1,2,3,4,5,6,7,8,9];
console.log(odd(arr))