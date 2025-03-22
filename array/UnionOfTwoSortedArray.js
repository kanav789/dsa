 const union =(arr1, arr2)=>{
  let n1 = arr1.length;
  let n2 =arr2.length;


  let i=0;
  let j=0;

  let unionArr =[];

  while(i<n1 && j<n2){
   if(arr1[i]<=arr2[j]){
    if(unionArr.length == 0 || unionArr[unionArr.length-1] !== arr1[i]){
        unionArr.push(arr1[i]);
    }
     i++;
   }
   else{
    if(unionArr.length == 0 || unionArr[unionArr.length -1] !== arr2[j]){
        unionArr.push(arr2[j]);
    }
    j++;
   }


  }
  while (j<n2){
    if(unionArr.length == 0 || unionArr[unionArr.length -1] !== arr2[j]){
        unionArr.push(arr2[j]);
    }
    j++;
  }
  while (i<n1){
    if(unionArr.length == 0 || unionArr[unionArr.length-1] !== arr1[i]){
        unionArr.push(arr1[i]);
    }
     i++;
  }


  return unionArr
 

 }


 console.log(union([1,2,3,4,5],[1,2,3,4,5,6,7,8,9,10])) // [1,2,3,4,5,6,7,8,9,10]