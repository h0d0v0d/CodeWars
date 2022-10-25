function whatday(num) { 

    // put your code here
    const arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Wrong, please enter a number between 1 and 7']
    return num > 0  && num<8 ? arr[num-1] : arr[arr.length-1]
  
  
  }