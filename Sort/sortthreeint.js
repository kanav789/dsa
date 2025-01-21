function SortColor(arr) {
  let zerocount = 0;
  let onecount = 0;
  let twocount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zerocount++;
    } else if (arr[i] === 1) {
      onecount++;
    } else {
      twocount++;
    }
  }
  let idx = 0;
  for (let i = 0; i < zerocount; i++) {
    arr[idx++] = 0;
  }
  for (let i = 0; i < onecount; i++) {
    arr[idx++] = 1;
  }
  for (let i = 0; i < twocount; i++) {
    arr[idx++] = 2;
  }

  console.log(arr);
}

SortColor([2, 0, 2, 1, 1, 0, 1, 2, 0, 0]);
