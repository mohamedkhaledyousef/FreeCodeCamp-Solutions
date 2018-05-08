
function sumAll(arr) {
  var mx=Math.max(arr[0],arr[1]),
      mn=Math.min(arr[0],arr[1]),
      sum=0;
  
  for(var i=mn; i<=mx ;++i)
    {
      sum+=i;
      
    }
  
  return sum;
}

sumAll([1, 4]);
