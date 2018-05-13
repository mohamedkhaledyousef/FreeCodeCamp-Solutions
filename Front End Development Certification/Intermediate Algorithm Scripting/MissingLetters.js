
function fearNotLetter(str) {
  var alpha='abcdefghijklmnopqrstuvwxyz',
      strLen=str.length,            //4
      start=alpha.indexOf(str[0]),  //a
      end=start+strLen;             //e

  if(alpha.includes(str))           //abc ... lmnop
      return undefined;
 
  for(var i=start; i<end ;++i)//from a to e
  {
    if(alpha.charCodeAt(i)!==str.charCodeAt(i))
    {
      return alpha[i];
    }
     
  }
  
  return undefined;
}

fearNotLetter("abce");







