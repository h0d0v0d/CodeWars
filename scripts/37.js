function tripleShiftian(base, n) {
    if (n === 1) {
      return base[0];
    } else if (n === 2) {
      return base[1];
    } else if (n === 3) {
      return base[2];
    }
    
    let t1 = base[0];
    let t2 = base[1];
    let t3 = base[2];
    let tn;
    
    for (let i = 4; i <= n; i++) {
      tn = 4*t3 - 5*t2 + 3*t1;
      t1 = t2;
      t2 = t3;
      t3 = tn;
    }
    
    return tn;
  }