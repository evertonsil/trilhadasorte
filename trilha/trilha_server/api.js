const express    = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const gameRoutes = require("./routes/game")
  const app = express();
  app.use(cors());
  gameRoutes(app)
  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.listen(process.env.PORT || 3010, function(){
      console.log("bruh");
    });
    
  // MIDDLEWARES

// var Lastresulsts = require('./lastresults');
// var Jogosbons = require('./jogosbons');

