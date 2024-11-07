import express from 'express';
import historicoInflacao from './dados/dados.js';

const app = express();

app.get('/historicoIPCA', (req, res) => {
    res.json(historicoInflacao);
})

//app.get('/historicoIPCA:')

app.get('/historicoIPCA:idIPCA', (req, res) => {
    const id = id_IPCA_BUSCAR(req.params.idIPCA);
    res.json(id)
})




app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em:' +data);
});