const mongoose = require('mongoose');

const URI = 'mongodb://mongodb/agenda-docker';

mongoose
    .connect(URI, { useNewUrlParser: true })
    .then(() => console.log('Mongoose conectado'))
    .catch(erro => console.log(erro));