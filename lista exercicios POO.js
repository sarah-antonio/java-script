// 🔹 Herança 

// 1. Crie uma classe InstrumentoMusical com o método tocar(). Depois, crie duas subclasses Violao e Piano que herdem de InstrumentoMusical e sobrescrevam o método tocar() exibindo mensagens diferentes.

// class InstrumentoMusical{
//     tocar(){
//         console.log('emitir o som dos instrumentos')
//     }
// }

// class violao extends InstrumentoMusical{
//     tocar(){
//         console.log('som do violao')
//     }
// }

// class piano extends InstrumentoMusical{
//     tocar(){
//         console.log('som do piano')
//     }iki
// }

// let instrumento1 = new violao()
// instrumento1.tocar()

// let instrumento2 = new piano()
// instrumento2.tocar()

// 2. Crie uma classe Funcionario com os atributos nome e salario. Crie uma classe Gerente que herde de Funcionario e adicione o atributo bonus.

// class Funcionario{

//     constructor(nome,salario){
//         this.nome = nome
//         this.salario = salario
//     }
// }

// class Gerente extends Funcionario{
//     constructor(nome,salario,bonus){
//         super(nome,salario)
//         this.bonus = bonus
//     }
// }

// let atributos = new Gerente ('sarah',3000,40)
// console.log(`atributos.salario que irão para o gerente: ${atributos.bonus}`)


// 3. Implemente uma classe Veiculo com os atributos marca e ano. Depois crie:
// Carro (com atributo adicional portas)
// Moto (com atributo adicional cilindradas)

class Veiculo{
    constructor(marca,ano){
        this.marca = marca
        this.ano = ano
    }
}

class Carro extends Veiculo{
    constructor(marca,ano){
        super(marca,ano)
    }
}

class Moto extends Veiculo{
    constructor(marca,ano){
        super(marca,ano)
    }
}

