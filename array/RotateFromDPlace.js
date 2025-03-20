// if i have to rotate the elements from d place 

// function RotateFromDPlace(arr,d){
//     let n=arr.length;   
//     let temp=[];
//     let temp2=[];
//     for(let i=0;i<n;i++){
//         if(i<=d){
//             temp.push(arr[i]);
//         }else{
//             temp2.push(arr[i]);
//         }
//     }
//     return temp2.concat(temp);

// }
// console.log(RotateFromDPlace([1,2,3,4,5,6,7],3)); // [3,4,5,6,7,1,2]



// if i want to rotate last d elements from right to left;

function RotateDPlace(array, d) {
    const n = array.length;
    if (n === 0 || d <= 0) {
        return array; // Edge cases: empty array or non-positive d
    }

    d = d % n; // In case d is greater than array length

    function reverse(array, start, end) {
        while (start < end) {
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }
    }

    reverse(array, n - d, n - 1);
    reverse(array, 0, n - d - 1);
    reverse(array, 0, n - 1);

    return array;
}

console.log(RotateDPlace([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(RotateDPlace([], 3)); // []
console.log(RotateDPlace([1, 2, 3], 0)); // [1, 2, 3]
console.log(RotateDPlace([1, 2], 3)); // [1, 2, 3]
console.log(RotateDPlace([1, 2, 3], 4)); // [3, 1, 2]

 
