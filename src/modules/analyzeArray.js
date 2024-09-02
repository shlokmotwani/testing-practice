function analyzeArray(arr) {
  let min = minArrayElement(arr);
  let max = maxArrayElement(arr);

  let sum = sumOfElementsIn(arr);
  let length = arr.length;
  let average = sum / length;

  return { average, min, max, length };
}

function minArrayElement(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function maxArrayElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function sumOfElementsIn(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

export { analyzeArray };
