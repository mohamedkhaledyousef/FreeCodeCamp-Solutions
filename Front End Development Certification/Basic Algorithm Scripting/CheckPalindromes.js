
function palindrome(str) {
    //to convert string to lower case
    str=str.toLowerCase().replace(/[\W_]/g, '');  
    
    //loop, to go through string from the beginning and the end to the mid of string
    //and compare the first char with the last char and second with the second from end
    //and break if we found characters not equals
  
    for(var i=0, len=str.length-1 ; i<len/2 ;++i) 
    {
      if(str[i] !== str[len-i]) 
      {
        return false;
      }
    }

  return true;
}

palindrome("never ODd oR evEN");

/*
Solution
  never ODd oR evEN
  neveroddoreven  //after convert string to lower case and ignoring space and other symbols
  
  neveroddore v e n
  012345678910111213
  len=14
  first character = index 0 = n
  last character = index 13 = n
  
  neverod
  0123456
  
  dore v  e  n
  7891011 12 13
  
 
*/
