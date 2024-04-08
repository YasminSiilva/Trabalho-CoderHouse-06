// Função para calcular o valor das parcelas
function calcularParcelas(valorEmprestimo, numParcelas) {
    const parcelas = [];
    for (let i = numParcelas; i > 0; i--) {
        const parcela = valorEmprestimo / i;
        parcelas.push(parcela);
    }
    return parcelas;
}

// Função para calcular a soma dos valores inseridos
function calcularSoma(valores) {
    let soma = 0;
    for (let valor of valores) {
        soma += valor;
    }
    return soma;
}

// Função para calcular a média dos valores inseridos
function calcularMedia(valores) {
    if (valores.length === 0) return 0;
    const soma = calcularSoma(valores);
    return soma / valores.length;
}

// Variáveis para armazenar os valores inseridos
const valoresInseridos = [];
let somaAtual = 0;
let mediaAtual = 0;

// Loop principal
while (true) {
    let entrada = prompt("Digite o valor do empréstimo (ou 'sair' para sair): ");
    
    // Verificar se o usuário deseja sair
    if (entrada.toLowerCase() === 'sair') {
        break;
    }
    
    // Verificar se a entrada é um número válido
    let valorEmprestimo = parseFloat(entrada);
    if (isNaN(valorEmprestimo)) {
        alert("Por favor, digite um valor válido.");
        continue;
    }
    
    let numParcelas = parseInt(prompt("Digite a quantidade de parcelas: "));
    
    // Calcular as parcelas
    let parcelas = calcularParcelas(valorEmprestimo, numParcelas);
    
    // Exibir o valor de cada parcela em ordem decrescente
    console.log("Valor das parcelas:");
    for (let i = 0; i < parcelas.length; i++) {
        console.log(`Parcela ${i+1}: R$ ${parcelas[i].toFixed(2)}`);
    }
    
    // Adicionar o valor inserido à lista e calcular a soma e a média
    valoresInseridos.push(valorEmprestimo);
    somaAtual = calcularSoma(valoresInseridos);
    mediaAtual = calcularMedia(valoresInseridos);
    
    // Exibir a soma e a média atual
    console.log(`Soma dos valores inseridos: R$ ${somaAtual.toFixed(2)}`);
    console.log(`Média dos valores inseridos: R$ ${mediaAtual.toFixed(2)}`);
}
