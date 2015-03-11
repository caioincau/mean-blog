var passport = require('passport');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });
    // route to test if the user is logged in or not 
    app.get('/loggedin', function(req, res) 
    	{ res.send(req.isAuthenticated() ? req.user : '0'); }); 
    // route to log in 
    app.post('/login', passport.authenticate('local-login'), 
    	function(req, res) { res.send(req.user); }); 
    // route to log out 
    app.post('/logout', 
    	function(req, res){ req.logOut(); res.send(200); });
};
