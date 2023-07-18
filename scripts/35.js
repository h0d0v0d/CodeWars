const add = (a, b) => {
    let carry = 0;
    let result = [];
    let i = a.length - 1;
    let j = b.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digitA = i >= 0 ? parseInt(a[i]) : 0;
      const digitB = j >= 0 ? parseInt(b[j]) : 0;
      const sum = digitA + digitB + carry;
  
      result.unshift(sum % 10);
      carry = Math.floor(sum / 10);
  
      i--;
      j--;
    }
  
    return result.join('').replace(/^0+/, '') || '0';
  }
const res = add('34', '56')
const res1 = add('63829983432984289347293874', '90938498237058927340892374089') // 91002328220491911630239667963
console.log(res)
console.log(res1)