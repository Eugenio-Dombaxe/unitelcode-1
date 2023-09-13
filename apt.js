/*var nome = "Ell Dombaxe";
var idade = 29;

if(idade >= 18){
    document.write("Ele Pode Votar")
}
else{
    document.write("Ele Não Pode Votar")
}

for (let i = 1; i <=12; i++ ) {

    const resultado = 7 * i;

    document.write(`7 x ${i} = ${resultado} <br> `);

    
*/
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

let contador = 0;

botao.addEventListener('click', function(){

    contador ++;

    if (contador ===1){
        resultado.textContent = `Voce clicou ${contador} vez`;
    }
    else {
        resultado.textContent = `Voce clicou ${contador} vezes`;

    }
  
});