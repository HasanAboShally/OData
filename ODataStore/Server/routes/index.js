var UsersHandler = require('./users.js');
var SitesHandler = require('./sites.js');

module.exports = function(app, usersDB, sitesDB){
   var usersHandler = new UsersHandler(usersDB, sitesDB);
   var sitesHandler = new SitesHandler(usersDB, sitesDB);
   
   
   app.get('/signUp', usersHandler.showSignUpPage);
   app.post('/signUp', usersHandler.doSignUp);
   
   app.get('/login', usersHandler.showLoginPage);
   app.post('/login', usersHandler.doLogin);
   
   app.get('/addSite', sitesHandler.showAddform);
   app.post('/addSite', sitesHandler.doAddSite);
   
   app.get('/', sitesHandler.showAll);
   
};
