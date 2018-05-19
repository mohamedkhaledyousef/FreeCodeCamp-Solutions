//2 3 5 7 11 13 17 19 23 29 31 37 41 43 47

//10
//2 3 5 7 =>17

function isPrime(num) 
{
  if(num<2) 
  {
    return false;
  }
  
  for(var i=2; i<num ;++i) 
  {
    if(num%i===0) 
    {
      return false;
    }
  }
  
  return true;
}

function sumPrimes(num) 
{
  var sum=0;
  for(var i=2; i<=num ;++i) 
  {
    if(isPrime(i)) 
    {
      sum+=i;
    }
    
  }
  return sum;
}

sumPrimes(10);
