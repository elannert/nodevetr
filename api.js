var request = require('request');
const baseuri = 'https://vetr-prod.apigee.net/v1/api/research';

module.exports = {

    securityInfo: function(ticker, apikey, callback){
        var propertiesObject = { ticker:ticker, apikey:apikey };

        var url = baseuri + '/securityInfo';
        request({url:url, qs:propertiesObject}, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            callback(null, response, body); 
          }
          else {
            callback(error, response); 
          }
        });
        
    }
}