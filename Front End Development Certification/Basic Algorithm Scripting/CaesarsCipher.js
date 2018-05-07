function rot13(str) { 
  var str1='ABCDEFGHIJKLM'.split(''),
      str2='NOPQRSTUVWXYZ'.split(''),
      index=0,
      result=[];

  for (i=0; i<str.length; i++) 
  {
    index=str1.indexOf(str[i]);

    if (index>=0) 
    {
      result.push(str2[index]);

    } 
    else
    {
        index=str2.indexOf(str[i]);

        if (str2[index]===undefined) 
        {
            result.push(str[i]);                
        }
      
        result.push(str1[index]);
    }
  }

  return result.join('');
}

rot13('SERR CVMMN!');