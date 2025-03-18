function RotateFromOnePlce(arr){
let n=arr.length;
let temp=arr[0]
for(let i=1;i<n;i++){
    arr[i-1]=arr[i]
}
arr[n-1]=temp;

return arr;
}
console.log(RotateFromOnePlce([4,5,6,7,8,9,10]))