//unworking why?
function array_diff(a, b) {
    return a.filter((i) => {
        if (b.indexOf(i) !== -1) {
            return 
        } else if ((b.indexOf(i) === -1)){
            return i
        }
    })
  }

console.log(array_diff([1, 2, 3, -7], [1, -7]))

console.log(array_diff([-11,14,9,10,-20,0,2,-16,-2,0,-1,15,0,-19,16,-9,15,19,-11],[-11,14]))
//unworking why?
