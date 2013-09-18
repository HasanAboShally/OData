function SitesHandler(usersDB, sitesDB){
	var fs = null;
	
    this.showAddform = function(req, res){
        if(req.session.user){
            res.render('addSite');
            return;
        }
        res.send('You Not Logedin');
        return;
    };
    
    this.doAddSite = function(req, res){
        
		
		fs = require('fs');
		var filename = Math.floor(Math.random() * 100000) + req.files.image.name;
		var newPath =  '.\\public\\imgs\\sites\\' + filename;
		fs.renameSync(req.files.image.path , newPath);
		
		var tags = req.body['tags'].split(',');
        for(t in tags){
            tags[t] = tags[t].trim();
        }
		
        sitesDB.onReady(function(){    
            sitesDB.Sites.add({
                SiteName: req.body['sitename'],
                SiteUrl: req.body['siteurl'],
                Description: req.body['description'],
				Picture: newPath,
				User: req.session.user.UserName, 
                Tags: tags
            });
			 sitesDB.saveChanges();
        });
        
        res.send('OK!');
    };
    
    this.showAll = function(req, res){
        sitesDB.onReady(function(){
            sitesDB.Sites.toArray(function(sites){
                var rs = [];
                for(s in sites){
                    if(sites[s].initData){
                        rs.push(sites[s].initData);
                    }
                }
                res.render('index', {'sites': rs});
            });
        });
    };
}

module.exports = SitesHandler;
