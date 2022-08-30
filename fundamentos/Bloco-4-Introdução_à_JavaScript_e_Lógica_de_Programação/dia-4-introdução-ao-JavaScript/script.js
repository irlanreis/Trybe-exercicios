function highestCount(arr) {    
    let contNumero = 0;
    
   for (let index in arr) {
    let verificaNumero = arr[index];
       
       for (let index2 in arr) {  
      if (verificaNumero === arr[index2]) { 
              contNumero += 1
          
         }
      }
      return contNumero;
   }
}
console.log(highestCount([2, 2, 0, 0, 5, 5, 5, 5,]))