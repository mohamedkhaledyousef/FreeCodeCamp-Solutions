
function confirmEnding(str, target) {
  var targetLength=target.length,
      finalStr=str.substr(-targetLength),
      ok;
  
  if(finalStr===target)
  {
    ok=true;
  }
  else
  {
    ok=false;
  }

  return ok;
}

confirmEnding("Open sesame", "same");
//                    4      




