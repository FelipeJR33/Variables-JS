const capital = 1000;
const juros = 0.125;
const tempo = 5;
const montante = capital * Math.pow(1+juros, tempo);


console.log(Math.round(montante))