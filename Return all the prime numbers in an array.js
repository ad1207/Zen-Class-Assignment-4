//Return all the prime numbers in an array
var prime=(arr)=>{
    let ans=[];
    for(var i=0;i<arr.length;i++){
        var x=arr[i];
        if(x==1 || x==2){
            ans.push(x)
        }
        else{
            var pr=true
            for(var j=2;j<x;j++){
                if(x%j==0){
                    pr=false
                }
            }
            if(pr==true){
                ans.push(x)
            }
        }
    }
    return ans
}
let arr=[1,3,5,4,7,8,9]
console.log(prime(arr))