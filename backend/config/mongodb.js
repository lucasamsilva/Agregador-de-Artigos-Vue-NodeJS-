const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
.catch(e => {
    const msg = 'ERRO: Não foi possível conectar com o MongoDB!'
    console.log(msg)
});

