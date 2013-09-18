function UsersHandler(usersDB, sitesDB){

    this.showSignUpPage = function(req, res){
        res.render('signUp');
    };
    
    this.showLoginPage = function(req, res){
        res.render('login');
    };
    
    this.doSignUp = function(req, res){
        usersDB.onReady(function(){
            
            
            //TODO add more checks like if password is empty and password confirmatin.
            var promise = usersDB.Users.first(function(user){
                return user.UserName == this.username;
            },{username: req.body['username']})
            
            promise.then(function(){
                console.dir(arguments);
                res.send('username exists');
            });
            
            promise.fail(function(){
                usersDB.Users.add({'UserName': req.body['username'], 'UserPass':req.body['password'] });
                usersDB.saveChanges();
                res.send('OK!');
            });
        });
    };
    
    this.doLogin = function(req, res){
        usersDB.onReady(function(){
            
            
            var promise = usersDB.Users.first(function(user){
                return user.UserName == this.username && user.UserPass == this.password;
            },{username: req.body['username'], password: req.body['password']});
            
            promise.then(function(user){
                req.session.user = user.initData;
                res.send('OK!');
            });
            
            promise.fail(function(){
                res.send('Failed');
            });
        });
    };

}

module.exports = UsersHandler;
