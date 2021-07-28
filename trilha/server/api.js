var Lastresulsts = require('./lastresults');
// var Jogosbons = require('./jogosbons');

const dboperations = require('./dboperations');

dboperations.getLastresults().then(result => {
    console.log(result);
})

// dboperations.getJogosbons().then(result => {
//     console.log(result);
// })