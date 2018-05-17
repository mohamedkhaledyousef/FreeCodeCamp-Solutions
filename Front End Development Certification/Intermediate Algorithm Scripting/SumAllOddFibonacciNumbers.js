  //0 1 1 2 3 5 8 13 21 34 55 89
function sumFibs(num) {  

    //10
    //0 1 1 2 3 5 8 13 21 34 55
    //0 1 1 3 5 
    //1+1+3+5=10
    
    var fst=0,sec=1,sumOdd=0;
  
    while (sec<=num) 
    {
        if (sec%2!==0)  
        {
          sumOdd+=sec;  
        }

        sec+=fst;
        fst=sec-fst;
    }

    return sumOdd;
}

sumFibs(10);
