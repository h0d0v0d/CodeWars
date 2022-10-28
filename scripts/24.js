function highAndLow(numbers){
  arr = numbers.split(' ')
  return `${Math.max.apply(null, arr)} ${Math.min.apply(null, arr)}`
}