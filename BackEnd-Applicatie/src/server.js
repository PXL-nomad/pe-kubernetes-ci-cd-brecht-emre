require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const PORT = process.env.PORT;
const APIKEY = process.env.APIKEY;

const app = express();
const db = require('./db');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(cors());

app.use((err, req, res, next) => {
    if (err) {
      res.status(400).json({status:"Invalid Request data. Is there an error in your JSON syntax?"})
    } else {
      next()    
    }
})

app.use('/api', swaggerUI.serve);
app.get('/api', swaggerUI.setup(swaggerDoc));

app.get('/', (req, res) => {
  res.send('information about usage: /api');
});

app.use((req, res, next) =>{
    if(req.headers.key !== APIKEY){
        return res.status(401).json({status: 'no correct api key provided. Please provide an API key in the header \'key\''});
    }
    next();
});

app.use('/api',routes);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
  