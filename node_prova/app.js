const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo à Página Inicial!!!!</h1>');
});

// Rota /sobre
app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre Nós</h1><p>Esta é uma aplicação Node.js.</p>');
});

// Rota /contato
app.get('/contato', (req, res) => {
    res.send('<h1>Contato</h1><p>Email: contato@exemplo.com</p>');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:${PORT}");
});