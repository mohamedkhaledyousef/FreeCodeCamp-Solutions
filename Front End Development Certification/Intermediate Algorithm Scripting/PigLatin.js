
function translatePigLatin(str) {
  var vowels=/[aeiou]/gi;
  var res='';
  
  if(str[0].match(vowels))
    {
      res=str+'way';
      
    }
  else
    {
      var fstVowelIndex=str.indexOf(str.match(vowels)[0]);
      res=str.substr(fstVowelIndex)+str.substr(0,fstVowelIndex)+'ay';
      
    }
  
  return res;
}

translatePigLatin("lmnconsonant");  //onsonantlmncay
