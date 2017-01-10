function loopyLighthouse([range, range2], [multiples, multiples2], [word, word2]){
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
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

^^^ // failed due to parsing error, didn't like the square brackets//
function loopyLighthouse(range, multiples, words){
  for (var i = range[0]; i < range[1] + 1; i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0){
      console.log(words[0]);
    } else if (i % multiples[1] === 0){
      console.log(words[1]);
    } else console.log(i);
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])