function squareDigits(num){
    return Number([...num+''].reduce((s, cur) => {
        return s + (cur*cur) + ''
      }, 0));
}
