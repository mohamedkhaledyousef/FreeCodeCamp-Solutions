
function mutation(arr) {
  
  //convert the 2 string to lowercase to compare easy
  var s1=arr[0].toLowerCase();      //hello
  var s2=arr[1].toLowerCase();      //hey

  
  for (i=0; i<s2.length ;++i) 
  {
    if (s1.indexOf(s2[i])===-1)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
