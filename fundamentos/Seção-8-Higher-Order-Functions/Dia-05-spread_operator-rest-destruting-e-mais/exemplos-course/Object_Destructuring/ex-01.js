//Você certamente já precisou extrair valores de um objeto em Javascript. No exemplo abaixo, como você faria para imprimir o valor de cada propriedade do objeto product?

 const product = {
     name: 'Smart TV Crystal UHD',
     price: '1899.05',
     seller: 'Casas de Minas',
   };
//   console.log(product.name);

  //com o Object Destructuring
  const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller);
