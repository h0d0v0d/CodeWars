function squares(x, n) {
    let ot = [x]
    for (let i = 0; i<n-1; i++) {
      let newItem = ot[ot.length - 1] * ot[ot.length - 1]
      ot.push(newItem)
    }
    return n <= 0  ? [] : ot
  }