function insertionsort(arr){
    let n= arr.length
   for(let i=0; i<=n-1; i++){
  let j=i;
  while(j>0 && arr[j-1]>arr[j])
  {
    let temp = arr[j];
    arr[j] = arr[j-1];
    arr[j-1] = temp;
    j--;
  }
   }
console.log(arr) 

}
insertionsort([5, 4, 3, 2, 1]) 