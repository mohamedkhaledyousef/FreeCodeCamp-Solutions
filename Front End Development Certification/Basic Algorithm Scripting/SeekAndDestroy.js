
function destroyer(arr) {
  // Remove all the values
  var args=Array.prototype.slice.call(arguments);

  for (var i=0; i<arr.length ;++i)    //6
    for (var j=0; j<args.length ;++j) //2
    {
      if (arr[i]===args[j]) 
      {
        delete arr[i];
      }
    }
  
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
