function findTop3Words(text) {
    // Преобразуем текст в массив слов, игнорируя пунктуацию и пробелы
    let words = text.toLowerCase().match(/\b\w+\b/g);
  
    // Создаем объект для подсчета количества вхождений каждого слова
    let wordCount = {};
  
    // Перебираем все слова в массиве и увеличиваем счетчик для каждого слова
    words.forEach(function(word) {
      if (wordCount.hasOwnProperty(word)) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
  
    // Преобразуем объект в массив пар (слово, количество вхождений)
    let wordCountArray = Object.entries(wordCount);
  
    // Сортируем массив по убыванию количества вхождений
    wordCountArray.sort(function(a, b) {
      return b[1] - a[1];
    });
  
    // Возвращаем массив из 3 наиболее встречающихся слов
    return wordCountArray.slice(0, 3).map(function(pair) {
      return pair[0];
    });
  }

const res = findTop3Words('aa rttrt aa dfvdfv aa rttrt dfvdfv ldkfv kjfv kdjfn kerjf' )
console.log(res)