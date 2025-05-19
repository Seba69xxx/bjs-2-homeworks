function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, current) => acc + current, 0);
  const avg = sum / arr.length;
  const avgRounded = parseFloat(avg.toFixed(2));

  return { min: min, max: max, avg: avgRounded };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (!arrOfArr || arrOfArr.length === 0) {
     return -Infinity;
  }

  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    const currentArr = arrOfArr[i];
    const workerResult = func(...currentArr);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  
  return maxWorkerResult;
}
