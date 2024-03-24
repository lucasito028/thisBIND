// Exercise 1
/*
Crie um objeto chamado person com uma propriedade name. Em seguida, crie uma função arrow que utilize this para acessar 
o nome da pessoa.
*/
function exercise01({nome = 'Lucas'}) {

    const person = {
        name: nome,
        speakname() {
            console.log(`My name is: ${this.name}`);
        }
    };
    
    person.speakname();

}
 
// Exercise 2
/*
Crie uma função anônima que dobre um número passado como argumento. Use bind para criar uma versão da função que sempre 
dobra um número específico.
*/
function exercise02({numeroteste = 1}) {

    const double = (number) => {
        return number * 2;
    }

    const example = double.bind(null, numeroteste);
    console.log(example())
    
}
 
// Exercise 3
/*
Crie um array de números e utilize uma função arrow para criar um novo array que contenha o quadrado de cada número.
Dica: Potência é representada pelo sinal **valor
*/
function exercise03({ number = [1, 2, 3, 4, 5] }) {
 
    const numbersquare = []

    const raised = number.map((number) => {
        console.log(number);
        numbersquare.push(number ** 2);
    })

    console.log("\n");
    const numbersquarecount = numbersquare.map((numbersquare) => {
        console.log(numbersquare);
    })

}
 
// Exercise 4
/*
Crie uma função que receba um array de strings e uma função callback. A função deve aplicar a função callback a cada 
elemento do array e retornar um novo array com os resultados.
*/
function exercise04({ word = ['John', 'Maria', 'Joana'] }) {

    const newword = [];

    const addword = word.map((word) =>
    {
        newword.push(word + " Exemplo");
    });

    const shownewarray = newword.map((newword) =>
    {
        console.log(newword);
    });

    
}
 
// Exercise 5
/*
Crie  um  objeto  calculator  com  propriedades  x  e  y,  e  métodos  que  realizem  operações matemáticas como adição,
subtração, multiplicação e divisão. Use funções arrow para definir os métodos e garantir que o this se refira ao objeto 
calculator.
*/
function exercise05({x = 1, y = 2, operation = '+'}) {

    const calculator = {
        x: x,
        y: y,
        add: function() {
            console.log(this.x + this.y);
        },
        subtract: function() {
            console.log(this.x - this.y);
        },
        multiply: function() {
            console.log(this.x * this.y);
        },
        divide: function() {
            console.log(this.x / this.y);
        }
    }

    const {add, subtract, multiply , divide} = calculator;

    switch(operation){
        case '+':
            add.bind(calculator)();
            break;
        case '-':
            subtract.bind(calculator)();
            break;
        case '*':
            multiply.bind(calculator)();
            break;
        case '/':
            divide.bind(calculator)();
            break;
    }
    
}
 
// Exercise 6
/*
Crie uma classe chamada Product que representa um produto com propriedades como nome, preço e categoria. A classe deve 
ter um construtor para inicializar essas propriedades e um método para exibir informações sobre o produto.
*/
function exercise06({nome = "Potato", price = 10, category = "Food"}) {

    class Product{

        constructor(name, price, category){
            this.name = name;
            this.price = price;
            this.category = category;
        }

        showProduct(){
            console.log(`Product name: ${this.name}\nProduct price: ${this.price}\nProduct category: ${this.category}`);
        }

    }

    const p1 = new Product(nome, price, category);

    p1.showProduct();

}
 
// Exercise 7
/*
Crie uma classe chamada BankAccount que representa uma conta bancária com propriedades como saldo e número da conta.
A classe deve ter métodos para depositar, sacar e verificar o saldo. Certifique-se de que o saldo não fique negativo 
após um saque.
*/
function exercise07({ value = 1600.00, numberaccount = "12345678-9"}) {

    class BankAccount{

        constructor(value, numberaccount){
            this.value = value;
            this.numberaccount = numberaccount;
        }

        deposit(value){
            this.value += value;
        }

        withdraw(value){
            this.value -= value;
        }

        showbalance(){
            console.log(`Your balance is: ${this.value}`);
            console.log(`Your Account is: ${this.numberaccount}`);
        }
    }

    const b1 = new BankAccount(value, numberaccount);

    console.log("Before withdraw")
    b1.showbalance();

    console.log("After withdraw")
    b1.withdraw(500);
    b1.showbalance();

    console.log("\n")

    console.log("Before deposit")
    b1.showbalance();


    console.log("After deposit")
    b1.deposit(4000);
    b1.showbalance();

}
 
// If you want put values you can but basement in the destruction of parameters
 
// 
exercise01({ });
// exercise02({ });
// exercise03({ });
// exercise04({ });
// exercise05({ });
// exercise06({ });
// exercise07({ });
 
//And Last in cmd put node script.js
//Or try in index.html