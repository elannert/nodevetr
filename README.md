nodevetr
===========
A simple interface to the vetr.com investment research platform

Installation
============== 

    $ npm install nodevetr

Example
==========

```javascript
    var vetr = require('nodevetr');

    var apikey = 'get from http://developers.vetr.com/#introduction';
    vetr.securityInfo('GOOG', apikey, function(err, resp){
        console.log(err);
        console.log(resp);
    });


```
