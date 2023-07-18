// эта функция ищет три самых часто повторяющихся слова
function findTop3Words(text) {
    const words = text.toLowerCase().match(/[a-z']+/g) || [];
    const wordCount = new Map();
    words.forEach(word => {
      const count = wordCount.get(word) || 0;
      wordCount.set(word, count + 1);
    });
    const sortedWords = Array.from(wordCount.entries()).sort((a, b) => b[1] - a[1]);
    return sortedWords.slice(0, 3).map(pair => pair[0]);
  }

const res = findTop3Words('aa rttrt aa dfvdfv aa rttrt dfvdfv ldkfv kjfv kdjfn kerjf' )
console.log(res)