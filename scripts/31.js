const xMarksTheSpot = (input) => {
    let ot = []
    let found = 0
    input.forEach((item, i) => {
        item.forEach((item1, i1) => {
            if (item1 == 'x') {
              ot = [i , i1]
              found++
            }
          }) 
    })
    return found > 1 || ot.length == 0 ? [] : ot
  }

