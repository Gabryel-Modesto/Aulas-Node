const e = require("express");
const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

const caminho = path.join(__dirname, "pages");

//Simula ter usuário autenticado
const checkAutorization = (req, res, next) => {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Usuário autenticado");
  } else {
    console.log("Usuário não pode acessar");
  }
  next();
};

app.use(checkAutorization);

//CONVERTE O BODY EM JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CRIANDO O POST
app.get("/users/cadastro", (req, res) => {
    res.sendFile(`${caminho}/cadastro.html`);
});

app.post("/users/save", (req, res) => {
  res.sendFile(`${caminho}/save.html`);

  console.log(req.body);
    
  const login = req.body.usuario;
  const senha = req.body.senha;
  
  console.log(`Login do individuo ${login} e a senha é ${senha}`);
  
  
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Usuário ${id} foi encontrado`);
  res.sendFile(`${caminho}/users.html`);
});

app.get("/home", (req, res) => {
  res.sendFile(`${caminho}/index.html`);
});

app.get("/", (req, res) => {
  res.write(`Este servidor esta rodando na porta ${port}`);
  res.end();
});

app.use((req, res, next) => {
  res.status(404).sendFile(`${caminho}/404.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
