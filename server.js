const express = require('express');
const app = express();
const path = require('path');

// Isso diz ao Node para servir todos os arquivos da pasta "public"
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});