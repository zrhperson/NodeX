// NodeX
const Application = require('./application.js'); //app
function NodeX(){
    console.log('NodeX===>');
	return new Application(); //app对象
}
module.exports = NodeX;