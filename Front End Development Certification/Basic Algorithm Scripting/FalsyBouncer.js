
function bouncer(arr) {

  /*
  var result=[];
  
  for(i=0; i<arr.length;i++)
    {
      if (arr[i])
      {
        result.push(arr[i]);
        
      }    
    
    }
    
  return result;  
  }
  */

  return arr.filter(function(arr)
                    {
    //for all not false,null,0,"",undefined and NaN
    if(Boolean(arr)!==false) 
    {           
      return arr;         
    }        
  });
}
  
bouncer([7, "ate", "", false, 9]);
  