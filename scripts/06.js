function numberToPower(number, power){
  console.info(Math.log2(1024));
  let count = 1
  for (let i = 0; i < power; i++) {
    count = count * number
  }
  return count
}