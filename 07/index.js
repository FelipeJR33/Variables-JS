const jaDoentes = 1000, novosInfectadosPorDoente = 4, tempo = 100;
const totalDeInfectados = jaDoentes * Math.pow(novosInfectadosPorDoente, tempo/7)
console.log(Math.round(totalDeInfectados))