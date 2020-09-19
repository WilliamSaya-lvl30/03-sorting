function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}

function inOrder(arr, i) {
  console.log(arr[i], arr[i + 1]);
  return arr[i] <= arr[i + 1];
}

function bubblesort(arr) {
  for (let j = arr.length; j > 0; j--) {
    let swapper = false;
    for (let i = 0; i < j - 1; i++) {
      if (!inOrder(arr, i) && arr[i + 1]) {
        swap(arr, i);
        swapper = true;
      }
    }
    if (!swapper) break;
  }
  return arr;
}
