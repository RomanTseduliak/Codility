Перетворити число в 2 систему

Перевірити число на 0
Записати в longestZero

Повернути  longestZero  в числі або 0
function solution (N){
  let longestZero = 0;
    let isZero = 0;
      while (N % 2 === 0) {
        N = Math.floor(N / 2);
    }
    
    while (N > 0) {
        if (N % 2 === 1) {
            if (isZero > longestZero) {
                longestZero = isZero;
            }
            
            isZero = 0;
        } else {
            isZero++;
        }
        
        N = Math.floor(N / 2);
    }
    
    return longestZero;
}
         
         
//  return isZero        
//   let longestZero = 0;
//     let isZero = 0;
//       while (N % 2 === 0) {
//         N = Math.floor(N / 2);
//     }
    
//     while (N > 0) {
//         if (N % 2 === 1) {
//             if (isZero > longestZero) {
//                 longestZero = isZero;
//             }
            
//             isZero = 0;
//         } else {
//             isZero++;
//         }
        
//         N = Math.floor(N / 2);
//     }
    
//     return longestZero;
// }
  
//     var binary = '';
//     var counter = -1;
//     var max = 0;
  
  
//     while(N > 0) {
//         var digit = N % 2;
        
//         if(digit === 1) {
//             if(counter > max) {
//                 max = counter;
//             }
//             counter = 0;
//         } else if(counter >= 0) {
//             counter++;
//         }
        
//         binary = '' + digit + binary;
//         N = parseInt(N / 2);
//     }
  
// for digit in digits
// let i < 0, digits.lenght[i], i++
// while( digit === 0) {
// digit = digit++
// result digit.lenght
// return max digits.lenght or 0
//   let bin = 0;
//     let rem, i = 1, step = 1;
//     while (N != 0) {
//         rem = N % 2;
      
//         N = parseInt(N / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }

    
//     return max;
