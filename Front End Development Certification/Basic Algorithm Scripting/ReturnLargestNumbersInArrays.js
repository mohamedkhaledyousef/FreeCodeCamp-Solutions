
function largestOfFour(arr) {
    var results=[];
    for (var n=0; n<arr.length ;++n) 
    {
        //which is in the first of any sub array=4 or 13 or 32 or 1000 ... suppose each first element is the largest
        var largestNumber=arr[n][0];  
    
        //start from the second index in each sub array
        for (var sub=1; sub<arr[n].length ;++sub)   
        {
            if (arr[n][sub]>largestNumber) 
            {
            largestNumber=arr[n][sub];
            }
        }

        results[n]=largestNumber;
    }
  
    //[5,27,39,1001]
    return results;    
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
