function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { },[ ], true)); // Você passou 4 parâmetros para a função.

  //Observe no segundo console.log que passamos diferentes tipos de argumentos para a função quantosParams, e que todos foram colocados em um array