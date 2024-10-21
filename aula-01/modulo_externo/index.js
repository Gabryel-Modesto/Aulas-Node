const minimist = require('minimist')

const argumentos = minimist(process.argv.slice(2))

console.log(argumentos)

const nome = argumentos["nome"]
const sobreNome = argumentos["sobreNome"]


console.log(`O nome dele é: ${nome} ${sobreNome}`)