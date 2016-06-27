'use strict';

module.exports = function (app) {
    app.get('/', function(req, res) {
        
        var ipReg = /^\D*/;    
        var langReg = /^\w*(-)\w*/;
        var sofReg = /\((.*?)\)/;
        
        
       var info = {
           ipaddress: req.ip.replace(ipReg, ''),
           language: req.headers['accept-language'].match(langReg)[0],
           software: req.headers['user-agent'].match(sofReg)[1]
       };
       res.send(info);
       });
};