function titleCase(str)
{
    //split the string and convert it as lowercase in array
    var arr=str.toLowerCase().split(" ");  
    //["i'm","a","little","tea","pot","the","boy","and","girl","of","city"]
  
  
    //for every element in array, convert the first character in each element to uppercase
    var result=arr.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        //["I'm","A","Little","Tea","Pot","The","Boy","And","Girl","Of","City"]
    
    });
  
    return result.join(' ');
}

titleCase("I'm a little tea pot the boy and gIRl of city");  //I'm A Little Tea Pot The Boy And Girl Of City
