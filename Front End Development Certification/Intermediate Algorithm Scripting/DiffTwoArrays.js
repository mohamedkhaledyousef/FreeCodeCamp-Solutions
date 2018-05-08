
function diffArray(arr1, arr2) {
  var res=[];
  
  //concatenate the two arrays and sort them
  var all=arr1.concat(arr2).sort(); 

  for(var i=0; i<all.length ;++i) 
  {
       if(all[i]!==all[i+1] && all[i]!==all[i-1])
       {
         res.push(all[i]);
       }
    
  }

  return res;
  
}

/*
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
all=[1,1,2,2,3,3,4,5,5]
res=[4]

*/

