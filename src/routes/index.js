var express = require('express');
var router = express.Router();
var games = require('../services/games')

/* GET home page. */
// router.get('/', function(req, res, next) {
  // var visits = parseInt(req.cookies.visits) || 0;
  // visits += 1;
  // res.cookie('visits', visits);
// //  res.render('index',
// //      { title: 'Express', name: 'World', visits: visits }
// //  );
  // res.render('index', { title: 'Welcome', userId: req.user.id });
  // //res.render('index', { title: 'Express2' });
// });

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hangman',
    userId: req.user.id,
    createdGames: games.createdBy(req.user.id),
    availableGames: games.availableTo(req.user.id),
    partials: { createdGame: 'createdGame' }
  });
});
module.exports = router;
