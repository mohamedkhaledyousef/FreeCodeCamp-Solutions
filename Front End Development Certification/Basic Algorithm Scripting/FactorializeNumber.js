
/*
!5=5*4*3*2*1
!5=5*!4
!5=5*4*!3
!5=20*3*!2
!5=60*2*!1
!5=120*1
!5=120

*/

function factorialize(num) {
  if(num===0||num===1)
    return 1;  

  return num*factorialize(num-1);

}

factorialize(5);
