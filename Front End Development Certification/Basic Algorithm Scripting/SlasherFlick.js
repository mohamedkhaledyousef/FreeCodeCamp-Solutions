
//my first solution
function slasher(arr, howMany) {
  arr.splice(0,howMany);
  
  return arr;
}

/*
//my second solution, shifting elements
function slasher(arr, howMany) {
  for(i=0; i<howMany ;++i)
  {
    arr.shift();
  }
  return arr;
}
*/

slasher([1, 2, 3], 2);
