let array=[-1,-100,3,99]


function HalfReverse  (array,start,end){
   while(start<=end){
    let temp=array[start]
    array[start]=array[end]
    array[end]=temp
    start++
    end--
   }
   return array
}
const d =2
const start=array.length - d 


HalfReverse(array,start,array.length -1)
HalfReverse(array,0,array.length - d-1)
console.log(HalfReverse(array,0,array.length -1))
