const altura = 3; raio = 1
const areaLateral = altura * (2 * Math.PI * raio)
const areaDasBases = 2 * (Math.PI * Math.pow(raio,2))
const areaTotal = areaLateral + areaDasBases
console.log(areaTotal)