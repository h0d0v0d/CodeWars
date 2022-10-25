function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0 ) {
        return []
    } else {
        let sum = 0;
        let quantity = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0){
                quantity++
            } else if (input[i] < 0) {
                sum += input[i]
            }
          }
          return [quantity, sum]
    }
}