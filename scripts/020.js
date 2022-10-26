function remainder(n, m){
    let high;
    let low;
    if (n > m) {
      high = n
      low = m
    } else {
      high = m
      low = n
    }
    
    
    return low == 0 ? NaN : high == 0 ? 0 : high%low
  }