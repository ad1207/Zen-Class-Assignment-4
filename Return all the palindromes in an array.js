//Return all the palindromes in an array
var palindrome=(arr)=>{
    var ans=[];
    for(let i=0;i<arr.length;i++){
        var x=arr[i];
        var a=true
        for(var j=0;j<x.length/2;j++){
            if(x[j]!==x[x.length-1-j]){
                a=false
            }
        }
        if(a==true){
            ans.push(x)
        }
    }
    return ans
}
let arr=['madam','hello','civic']
console.log(palindrome(arr))