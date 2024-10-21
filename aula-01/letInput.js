const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Você nasceu? ", (nasceu) => {    
    if(nasceu === "Sim"){
        console.log("Parabéns, você nasceu")
    } else {
        console.log("MEU DEUS, VOCÊ NÃO NASCEU")
    }
})