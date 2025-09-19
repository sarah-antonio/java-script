// // class Produto{
// //     constructor(nome,preco,quantidade){
// //         this.nome=nome
// //         this.preco=preco
// //         this.quantidade=quantidade
// //     }
// //     valorTotalEstoque(){
// //         return this.preco * this.quantidade
// //     }
// // }
// // let P1=new Produto("veja multiuso",12,3)
// // console.log(`valor Total em estoqu:R$${P1.valorTotalEstoque() }`)

// // class Filme{
// //     constructor(titulo,diretor,ano){
// //         this.titulo=titulo
// //         this.diretor=diretor
// //         this.ano=ano
         
// //     }
// //     detalhes(){
// //         console.log(`o filme ${this.titulo}foi lancado em ${this.ano}e dirigido por ${this.diretor}.`)
// //     }
// // }
// // let f1 =new Filme ("Matrix","Wachoowski",1999)
// // f1.detalhes()

// // class Aluno{
// //     constructor(nome,nota1,nota2){
// //         this.nome=nome
// //         this.nota1=nota1
// //         this.nota2=nota2

// //     }
// // media(){
// //     return(this.nota1+this.nota2)/2
// // }
// // situacao(){
// //     if(this.media()>=7){
// //         return `${this.nome} esta aprovado`
// //     }else{
// //         return `${this.nome} esta reprovado`
// // }
// // }
// // }
// // let aluno1 = new Aluno("sarah",9,8)
// // console.log(aluno1.situacao())

// // class Retangulo{
// //     constructor(base,altura){
// //         this.base=base
// //         this.altura=altura
// //     }
// //     area(){
// //         return this.base*this.altura
// //     }
// //     perimetro(){
// //         return 2*(this.base+this.altura)
// //     }
// // }
// // let R1=new Retangulo(7,5)
// // console.log("area:",R1.area())
// // console.log("perimetro:",R1.perimetro())

// // class Carro {
// //     constructor(marca, modelo, combustivel) {
// //         this.marca = marca;
// //         this.modelo = modelo;
// //         this.combustivel = combustivel;
// //     }

// //     abastecer(litros) {
// //         this.combustivel += litros;
// //         console.log(`Abasteceu ${litros}L. Agora tem ${this.combustivel}L no tanque.`);
// //     }

// //     dirigir(km) {
// //         let consumo = km / 10;
// //         if (consumo <= this.combustivel) {
// //             this.combustivel -= consumo;
// //             console.log(`Dirigiu ${km} km. Combustível restante: ${this.combustivel.toFixed(1)}L`);
// //         } else {
// //             console.log("Combustível insuficiente para essa viagem.");
// //         }
// //     }
// // }


// // let carro1 = new Carro("Toyota", "Corolla", 5);
// // carro1.dirigir(30);
// // carro1.abastecer(10);
// // carro1.dirigir(100);

// // class Retangulo {
// //     constructor(base,altura){
// //         this.base = base;
// //         this.base = altura;
// // }
// // area(base, altura)

// /////////////////////////////////////////////////////////////////////

// // class ContaBancaria{
// //     #saldo//deixar o atributo privado para a class
// //     numeroconta

// //     constructor(saldo,numeroconta){
// //         this.#salso = saldo
// //     //saldo com valor privado
// //         this.numeroconta = numeroconta{

// //         }
// //     get getsaldo(){return this.#saldo}//comando para acessar o atributo privado getter
    
// //     set setsaldo(valdo){
// //         return this.#saldo = valor// o set precisa de um parametro para modificar o atributo{
// //         }
// //     }
    
// //     let conta = new
// //     ContaBancaria(100,'R2D2');//criacao da variavel

// //     //uso do get
// //     console.log(conta.numeroconta);
// //     console.log(antes de tentar modificar com o get)

// //     ${conta.getsaldo});
// //     console.log(antes de tentar modificar com o get)
// //     console.log(depois de tentar modificar com o set 
// //      ${conta.getsaldo})   

// class Animal{
//     constructor(nome){
//         this.nome = nome
//     }
//     fazerSom(){
//         console.log('emite som generico')
//     }
// }
// class Cachorro extends Animal{
//     constructor(nome){
//         super(nome)
//     }
// }
// let cachorro = new Cachorro('Rex')

// console.log('nome do Cachorro é ${cachorro.nome}')


class funcionario{
    constructor(nome,salario){
        this.nome = nome
        this.salario = salario
    }



   

 

  
   






