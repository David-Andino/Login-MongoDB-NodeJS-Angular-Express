'use strict';
const cors = require('cors');
const express = require('express');
const authRoutes = require('./auth/auth.routes');
const properties = require('./config/properties');
const DB = require('./config/db');

// Iniciar la conexión a la base de datos
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);
authRoutes(router);

router.get('/', (req, res) => {
    res.send('Hello from Home');
});

app.use(router);

app.listen(properties.PORT, () => console.log(`Server running on port ${properties.PORT}`));
