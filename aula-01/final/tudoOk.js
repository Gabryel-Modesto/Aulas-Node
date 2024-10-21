//Utilização de módulo externo via npm
const minimist = require("minimist")
const fs = require('fs')

const argumentos = minimist(process.argv.slice(2))

//Utilizar módulo interno
const moduloSoma = require('../modulo.interno')
const funcSoma = moduloSoma.soma

const a = argumentos["a"]
const b = argumentos["b"]

funcSoma(a,b)

//Utilização de core modules

const resultado = funcSoma(a,b)

fs.writeFile("resultado.txt", resultado, 'utf-8', (erro, dados) =>{
    if(erro) throw erro
    console.log(dados)
})