const montante = 90000;
const capInicial = 60000;
const meses = 24;
const juros = (montante / capInicial) ** (1/meses) - 1;
console.log(`O seu financiamento de ${capInicial} reais teve uma taxa de juros de ${(juros * 100).toFixed(4)}%, pois após ${meses} meses você teve que pagar ${montante} reais`);