const sumSquareDifference = n => {
 let sum1 = 0;
 let sum2 = 0;
 
 for(let i = 1; i <= n; i++){
   sum1 += i ** 2;
 }

 for( let i = 1; i <= n; i++){
   sum2 += i;
 }
 
 return sum2 ** 2 - sum1;
}
