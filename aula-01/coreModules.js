const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (err, dados) => {
    if (err) throw err;
    console.log(dados);
});

const mensagem = "Socorro, Deus!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
const mensagem2 = "\nsucessagem garantida";

fs.writeFile('./test2.txt', mensagem, 'utf-8', (err) => {
    if (err) throw err;
    console.log("Deu certo");
});

fs.appendFile('./test2.txt', mensagem2, 'utf-8', (err) => {
    if (err) throw err;
    console.log("Deu certo 3");
});

fs.unlink('./test2.txt', (err) => {
    if (err) throw err;
    console.log("Deu certo 4");
});
