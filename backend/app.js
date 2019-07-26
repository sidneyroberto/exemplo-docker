const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(mongoSanitize());

app.use('/produtos', require('./routes/produtos'));

const PORTA = process.env.PORT || 3001;

app.listen(PORTA, () => console.log(`Backend iniciado na porta ${PORTA}`));
