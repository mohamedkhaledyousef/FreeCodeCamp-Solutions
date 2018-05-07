
function getIndexToIns(arr, num) {
  var myArr=[];
  
  for (var i=0; i<arr.length ;++i){
    myArr.push(arr[i]);
   }
  
  myArr.push(num);
  
  myArr.sort(function(a, b) {
    return a-b;
  });
  
  return myArr.indexOf(num);
  
  /*
  var myArr=arr.sort().filter(function(val){
  
    return val<num;
    
  });
  
  return myArr.length;
  */
  

}

//getIndexToIns([40, 60], 70);  //2
getIndexToIns([10, 20, 30, 40, 50], 35);  //3
