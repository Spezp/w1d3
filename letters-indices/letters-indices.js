const lettersHome = function(string) {
  var newArray = string.toLowerCase().split('');
  var obj = {};
  for(var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
    if (newArray[i] !== ' ') {
      if(obj[newArray[i]] === undefined) {
        obj[newArray[i]] = [];
      } else {
        obj[newArray[i]].push(i);
      }
    }
  }
  return obj;
};

console.log(lettersHome('aaaAAAss ssddd'));