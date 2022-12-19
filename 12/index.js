const montante = 90_000, capital = 60_000, periodoEmMeses = 24
const taxaDeJuros = Math.pow(montante/capital, 1/periodoEmMeses) - 1
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${(taxaDeJuros*100).toFixed(3)}%, pois após ${periodoEmMeses} meses você teve que pagar ${montante} reais.`)
