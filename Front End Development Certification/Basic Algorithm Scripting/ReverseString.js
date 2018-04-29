function reverseString(str) {
  var s="";
  str.split("");
  for(var i=str.length-1; i>=0 ;--i){
    s+=str[i];
  }
  return s;
}

/*
function reverseString(str) {
  return str.split('').reverse().join('');
}
*/

reverseString("hello");
