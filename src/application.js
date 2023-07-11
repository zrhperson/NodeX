const http = require('http');

function Application(){}
Application.prototype.listen = function(){
    let server = http.createServer(function(req,res,done){
        console.log(req, res, 'server===>');
    })
    server.listen.apply(server,arguments);
}

module.exports = Application;