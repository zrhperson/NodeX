const http = require('http');
const Emitter = require('events')
const compose = require('./lib/compose.js');

class NodeX extends Emitter{
    constructor(){
    	super();
        this.middlewares = [];
    }
    
    //监听&&启动http服务器
    listen(){
    	const server = http.createServer(this.handleRequest());
     	return server.listen(...arguments);
    }

    //具体的请求处理方法
    handleRequest(){
        // 监听错误
        if (!this.listenerCount('error')) this.on('error', this.onerror)

    	return (req,res)=>{
            let composeMiddleWare = compose(this.middlewares)

            const onerror = err => this.emit('error',err, req, res)
            const handleResponse = () => this.respond(req,res)

            composeMiddleWare().then(handleResponse).catch(onerror)
        }
    }
    
    //注册中间件
    use(fn){
    	this.middlewares.push(fn);
    }


    respond(req,res){
        console.log("respond======>");
    }

    onerror(err, req, res){
        console.log("onerror======>");
        res.writeHead(500, { "Content-Type": "application/json" });
        let result = JSON.stringify({code: 500, msg: err.message});
        res.end(result);
    }
    
}

module.exports = NodeX;