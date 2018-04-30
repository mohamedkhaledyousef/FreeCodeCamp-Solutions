
function truncateString(str, num) {  
    var truncateSt;
    //  truncateSt = str1.slice(0, 10);  
  
    //truncateString("mkhyy", 4); => m...
    if (str.length>num && num>3)                 
        return str.slice(0, (num - 3)) + '...';
    
    //truncateString("mkhyy", 3); => mkh...
    else if (str.length>num && num<=3)      
        return str.slice(0, num) + '...';

    //truncateString("mkhyy", 5); => mkhyy
    else                                         
        return str;     
}

truncateString("mkhyy", 5);
