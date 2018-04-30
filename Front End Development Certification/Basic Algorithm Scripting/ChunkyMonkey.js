
function chunkArrayInGroups(arr, size) {
  /*
  chunkArrayInGroups(["a", "b", "c", "d"], 2) 
  should return [["a", "b"], ["c", "d"]].
  
  */
  var result= [];
  for(var i=0; i<arr.length ;i+=size)
    {
      result.push(arr.slice(i,i+size));
      
    }

  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
