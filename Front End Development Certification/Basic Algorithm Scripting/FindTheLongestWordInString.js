
function findLongestWord(str) {
    var space=' ';
    var afterSplit=str.split(space);  
    //"The" "quick" "brown" "fox" "jumped" "over" "the" "lazy" "dog"
  
    var maxLength=0;
    for(var i=0 ;i<afterSplit.length ;++i)
    {
        if(afterSplit[i].length>maxLength)
        maxLength=afterSplit[i].length;
      
    }
  
    return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
