function whatIsInAName(collection, source) {

  //Using filter with collection
  var res=collection.filter(function (items) {
    for(var i in source) 
    {
      if(items[i]!==source[i]) 
      {
        return false;
      }
    }
    
    return true;
  });
  
  return res;

}


whatIsInAName([{ "a": 1, "b": 2 },
               { "a": 1 },
               { "a": 1, "b": 2, "c": 2 }],
               { "a": 1, "b": 2 });
               //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]





