function XO(str) {
    let arr = str.split('')
    let x = 0;
    let o = 0
    arr.forEach(item => {
      if (item == 'x' || item == 'X') {
        x++
      } else if (item == 'o' || item == 'O') {
        o++
      }
    })
    return x == o
}