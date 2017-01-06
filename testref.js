function loopyLighthouse(range, multiples, word){
  range = [range, range2]
  multiples = [multiples, multiples2]
  word = [word, word2]
  for (var i = range; i < range2 +1; i++){
        if (i % multiples === 0 && i % multiples2 === 0){
      console.log(word + word2);
    } else if (i % multiples === 0){
      console.log(word);
    } else if (i % multiples2 === 0){
      console.log(word2);
    } else console.log(i);
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])