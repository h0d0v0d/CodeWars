// link for task - https://www.codewars.com/kata/5521d84b95c172461d0000a4

function toBcd(number){
    let counter = 0
    let remains = number
    let result = ''
    while(counter < 20) {
        console.log(remains)
        if (remains % 2 === 0) {
            remains = remains / 2
            result = `${result} ${0}`
        } else {
            remains = (remains-1)/2
            result = `${result} ${1}`
        }
        counter++
    }
    return result
}

console.log(toBcd(10)) // 0001 0000
// console.log(toBcd(-10)) // -0001 0000

