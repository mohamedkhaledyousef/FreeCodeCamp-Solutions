function uniteUnique(arr1, arr2, arr3) 
{
  var res=[];

  for (var i=0 ; i<arguments.length ;++i)   
  {
    var arr=arguments[i];

    for (var j=0; j<arr.length ;++j) 
    {
      if (!res.includes(arr[j])) 
      {
        res.push(arr[j]);
      }
    }
          
  }

  return res;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
