const controller = require('../controllers/game');

module.exports = app => {
  
    // app.route('/game/lastresult').get(controller.getlastresult);
    // app.route('/game/cltescolhefacil').get(controller.getclt_escolhe_facil);
    // app.route('/game/getjogosbons').get(controller.getjogosbons);

    app.post('/game', controller.create);
    app.post('/game', controller.createpremium);
    app.post('/game', controller.createmedium);


  }