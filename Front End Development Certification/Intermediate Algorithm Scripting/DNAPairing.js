
function pairElement(str) {
 
  //base pairs AT and CG
 
  var res=[];
  for (var i=0; i<str.length ;++i)
  {
    if(str[i]==="A")
    {
      res.push((str[i]+"T").split(""));
    } 
    else if (str[i]==="T")
    {
      res.push((str[i]+"A").split(""));      
    }
    else if (str[i]==="C")
    {
      res.push((str[i]+"G").split(""));      
    } 
    else if (str[i]==="G")
    {
      res.push((str[i]+"C").split(""));
    }
  }
  
  return res;
}

pairElement("GCG");



