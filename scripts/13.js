function findAverage(array) {
    // your code here
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      typeof(array[i]) == 'number' ? sum = sum + array[i] : null
    }
    return array.length ? sum/array.length : 0
  }