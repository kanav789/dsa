function kadaneAlgo(arr){
    let max = -Infinity;
    let n =arr.length;
    let sum = 0;
    for (let i=0; i<n;i++){
     sum +=arr[i];

     if(sum > max){
        max=sum;
     }
     if(sum<0){
        sum=0
     }
        
    }
    return max;
}

console.log(kadaneAlgo([-2,1,-3,4,-1,2,1,-5,4])) 