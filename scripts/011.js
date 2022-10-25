function first(arr, n = 1) {
    let newArr = []
    for (let i = 0; i<n; i++) {
      arr[i] != undefined ? newArr.push(arr[i]) : null
    }
    return newArr
  }