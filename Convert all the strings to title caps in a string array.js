// Convert all the strings to title caps in a string array
let title=(arr)=>{
    var ans=[];
    for(let i=0;i<arr.length;i++){
        var x=arr[i];
        x=x.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
        
        ans.push(x)
    }
    return ans
}
let arr=['hello world','iRon MAN','hApPy BiRtHdAy']
console.log(title(arr))