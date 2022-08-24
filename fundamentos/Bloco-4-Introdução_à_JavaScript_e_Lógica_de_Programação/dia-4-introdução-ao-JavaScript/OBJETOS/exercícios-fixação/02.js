
/*Acesse as chaves name, lastName e age e concatene
 as suas informações para imprimir no console 
 uma mensagem no seguinte formato: "A jogadora 
 Marta Silva tem 34 anos de idade".*/

 const player = {
    name:'Marta',
    
    lastName:'Silva',
    
    age:34,
    
    medals:{ golden: 2,
             
             silver: 3 }  
}

console.log( "A cantora" + ' ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + ' ' + 'anos.')