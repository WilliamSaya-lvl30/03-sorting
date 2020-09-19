function split(arr) {
  let half = Math.floor(arr.length / 2);
  let firtshalf = arr.slice(0, half);
  let secondhalf = arr.slice(half);
  return [firtshalf, secondhalf];
}

function merge(arr1, arr2) {
  let totallength = arr1.length + arr2.length;
  let resultado = [];
  while (resultado.length < totallength) {
    if (arr1[0] < arr2[0] || !arr2[0]) {
      resultado.push(arr1.shift());
    } else {
      resultado.push(arr2.shift());
    }
  }
  return resultado;
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  let [arr1, arr2] = split(arr);
  let m1 = mergesort(arr1);
  let m2 = mergesort(arr2);
  return merge(m1, m2);
}
