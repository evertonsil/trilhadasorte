
module.exports = app => {
    const controller = require('../controllers/game');
  
    app.route('/game').get(controller.index);
    app.route('/game/lastresult').get(controller.getlastresult);
    app.route('/game/cltescolhefacil').get(controller.getclt_escolhe_facil);
    app.route('/game/getjogosbons').get(controller.getjogosbons);


  }