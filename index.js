import prompt from 'prompt-sync';

let ler = prompt();

// objeto com os preços de açaí
const acaiPreços = {
    pequeno: 5.00,
    medio: 7.00,
    grande: 10.00
};
  
  // Função para calcular o valor final do pedido
function calcularPedido(x,y,z) {
    // Peça as quantidades de açaí pequeno, médio e grande
    const quantidadePequeno = x;
    const quantidadeMedio = y;
    const quantidadeGrande = z;
  
    // Calculo  valor final do pedido
    const valorFinal = (quantidadePequeno * acaiPreços.pequeno) + (quantidadeMedio * acaiPreços.medio) + (quantidadeGrande * acaiPreços.grande);
  
    //valor final do pedido
    console.log(`Valor final do pedido: R$ ${valorFinal.toFixed(2)}`);
}

console.log(calcularPedido());