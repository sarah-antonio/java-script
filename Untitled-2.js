// function soma (a,b){
// return a + b ;
// }
// console.log("soma:",soma(5,3));

// function media(n1,n2,n3){
//     return(n1+n2+n3)/3;
// }
// console.log("media:",media(7,8,9));

// const at = function (b, a) {
//     return (b * a) / 2;
// };
// console.log("area do triangulo:", at(10, 5));

// const parouimpar= function(num){
//     return num %2===0?"Par":"impar";
// };
// console.log("numero 7 é:", parouimpar(7));

// const maiornumero=(a,b)=>(a>b?a:b);
// console.log ("maior numero:",maiornumero(74,29));


// const numeropares=(array)=>array.filter((num)=>num%2===0);
// console.log("numeros pares:",numeropares([1,2,3,4,5,6]));

// (function(){
//     console.log("oi tudo bem?");
// })();

// (function(num){
//     console.log(" quadrado:",num*num);
// })(17);

// function boasvindas(nome,callback){
//     callback(nome);
// }
// boasvindas("sarah",(nome)=>{
//     console.log(`bem vinda,${nome}!`);
// });
 

// function aplicarCallback(array, callback) {
//     let novoarray = [];
//     for (let i = 0; i < array.length; i++) {
//         novoarray.push(callback(array[i]));
//     }
//     return novoarray;
// }

// console.log("dobro dos numeros:", aplicarCallback([1, 2, 3, 4], num => num * 2));

// function contagemregressiva(n){
//     if(n===0)return;4
//     console.log(n);
//     contagemregressiva(n-1);
// }
// contagemregressiva(10);

// async function esperar2segundos(){
//     await new Promise((resolve)=>setTimeout(resolve,2000));
//     console.log("passaram-se 2 segundos");
// }
// esperar2segundos();

// async function dobroapos1segundo(num){
//     await new Promise((resolve)=>setTimeout(resolve,1000));
//     return num * 2;
// }
// dobroapos1segundo(5).then((resultado)=>
//  console.log("dobro apos 1 segundo:",resultado)
// );


async function consultarusuario(){
    await new Promise((resolve)=>setTimeout(resolve,3000));
    console.log("usuario encontrado no sistema");
}
consultarusuario();