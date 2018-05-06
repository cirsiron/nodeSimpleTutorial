const path = require('path');

module.exports = {
    getRootPath:()=> {
        return path.join(__dirname,'../');
    }
}