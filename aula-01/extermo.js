console.log(process.argv)

const argumentos = process.argv.slice(2)

console.log(argumentos)

const nomeS = argumentos[0].split("=")[1]

console.log(nomeS)