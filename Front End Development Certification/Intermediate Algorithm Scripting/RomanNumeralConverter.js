function convertToRoman(num) {
  
  var map = [
    {dec:1, rom:'I'},
    {dec:4, rom:'IV'},
    {dec:5, rom:'V'},
    {dec:9, rom:'IX'},
    {dec:10, rom:'X'},
    {dec:40, rom:'XL'},
    {dec:50, rom:'L'},
    {dec:90, rom:'XC'},
    {dec:100, rom:'C'},
    {dec:400, rom:'CD'},
    {dec:500, rom:'D'},
    {dec:900, rom:'CM'},
    {dec:1000, rom:'M'}
  ];
  
  var roman='';
  
  while (num>0) 
  {
    var mx=map[0];
    map.forEach(function(val) {
      if (val.dec<=num) {
        mx=val;
      }
    });
  
    roman+=mx.rom;
    num-=mx.dec;
  }
  
  return roman;
}

convertToRoman(36);
