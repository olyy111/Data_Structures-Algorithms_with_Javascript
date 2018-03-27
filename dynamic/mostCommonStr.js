function lcs(word1, word2) {
  let str = ''
  for(var i=0;i<word1.length;i++){
    for(var j=0;j<word1.length;j++){
      if(word1[i] === word2[j]){
        str += word[i]
        
      }
    }
  }
}

function getStr(word1, word2) {
  let str = ''
  // if(word1[0] !== word[0]){
  //   return str
  // }
  for(var i=0;i<word1.length;i++){
    for(var j=0;j<word2.length;j++){
      if(word1[i] === word2[j]){
        str += word1[i]
        console.log(2)
        str += recurForAdjacent(word1.slice(i+1), word2.slice(j+1))
      }
    }
  }
  return 2
}

function recurForAdjacent(word1, word2) {
  var str = ''
  if(word1[0] === word2[0]){
    str = word1[0]
    str += recurForAdjacent(word1.slice(1), word2.slice(1))
  }else{
    return str
  }
}

console.log(getStr('bavn', 'cavd'))