
module.exports = app => {
    const controller = require('../controllers/game');
  
    app.route('/game').get(controller.index);
    app.route('/game/lastresult').get(controller.getlastresult);

  }