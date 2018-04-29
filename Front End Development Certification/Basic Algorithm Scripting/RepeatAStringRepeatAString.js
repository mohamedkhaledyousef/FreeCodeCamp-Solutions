
function repeatStringNumTimes(str, num) {
  if(num>=1)
  {
    var results=[];
    for (var i=0; i<num ;++i)
    {
      results+=str;
    }
    
    return results;
  }
  else 
    return "";
}

repeatStringNumTimes("abc", 0);
