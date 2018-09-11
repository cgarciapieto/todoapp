const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function () {
        // mongodb://<dbuser>:<dbpassword>@ds019906.mlab.com:19906/nodetodo
        //console.log('mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds019906.mlab.com:19906/nodetodo');
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds029803.mlab.com:29803/nodetodo2';
    }

};