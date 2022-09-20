const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    //  Recupere os valores necessários da constante order.

    const address = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson
    const customerName = order['name'];
    const custumerPhone = order['phoneNumber'];
    const street = order [address].number;
    const number = order[address].number;
    const apartment = order[address].apartment;

    //Concatene os valores recuperados utilizando ‘template literals’ e exiba a mensagem esperada.
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone:${custumerPhone},
     R. ${street}, Nº: ${number}, AP: ${apartment}`)
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const newBuyer = order.name = 'Luiz Silva';// Modifique o nome da pessoa compradora.
    const newTotal = order.payment.total = '50';// Modifique o valor total da compra.
    const pizzas = Object.keys(order.order.pizza);// Recupere as chaves que estão em `order.order.pizza`
    const drinks = order.order.drinks.coke.type;// Recupere o `type` da chave `coke`.

    //Concatene os valores recuperados utilizando template literals e exiba a mensagem esperada.
    console.log(`Óla ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);// Exiba a mensagem desejada utilizando `template literals`
  };
  
  orderModifier(order);