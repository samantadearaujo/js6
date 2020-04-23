
const nome = "samanta";
const idade = 32;
const cliente = {
    nome,
    idade
}

console.log(cliente.nome);

///Aula 05
// const usuario = {
//     nome:'Samanta',
//     idade: 32
// }

// console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos`)


// const array = [0,1,2,3,4,5,6];



// const usuario = {
//     nome: 'Samanta',
//     idade:32,
//     endereco: {
//             cidade: 'Leça da Palmeira',
//             pais: 'PT',
//     },
// };


// const {nome,idade, endereco:{cidade,pais}} = usuario;

// console.log(
//     'O usuário ' + nome +  ' tem ' +
//     idade + ' anos e mora em ' 
//     + cidade + '/' + pais
// );


// function mostraNome({nome,idade}){
//     console.log(nome,idade);
// }
// mostraNome(usuario);


////////AULA04
// function soma (a = 3, b = 6){
//     return a +b;
// }

// console.log(soma(8));
// console.log(soma());


// const somaArrow = (a=1,b=1) => {return a + b}; 

// console.log(somaArrow(2));




/////AULA 3
// const arr = [1,3,4,5,6];

// const newArr = arr.map(item => item * 2);


// console.log(newArr);

// const soma  = (n1,n2) => {return n1 + n2};

// console.log(soma(2,4));



///*****AULA 02 */
// const arr = [0,1,2,3,5,6,7,8,9,10,12,13,14,15];

// const newArr = arr.map(function(item,index)
// {
//  return item * 2;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total,next)
// {
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item)
// {
//     return item % 2 ===0;
// });

//  console.log(filter);

//  const find = arr.find(function(item){
//     return item === 4;
//  });

//  console.log(find);

//const arr = [0,1,2,3,5,6,7,8,9,10,12,13,14,15];

// const newArr = arr.map(function(item,index)
// {
//  return item * 2;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total,next)
// {
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item)
// {
//     return item % 2 ===0;
// });

//  console.log(filter);

//  const find = arr.find(function(item){
//     return item === 4;
//  });

//  console.log(find);



///*****AULA 01 */
// class List()
// {
//     constructor(){
//         this.data = [];
//         console.log(this.data);
//     }

//     add(data) {
//         this.data.push(data);
//     }

// }


// class TodoList extends List{
//    constructor(){
//        super();
//        this.usuario = 'Diego';
//    } 
   
//    mostraUsuario(){
//        console.log(this.usuario);
//    }
    
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();