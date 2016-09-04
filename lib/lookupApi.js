'use strict';

var searchKeys_inCouchbase = require('./searchKeys_inCouchbase');
var solrIndexer = require('./solrIndexer');

var LookupApi;
console.log('LookupApi STARTED');

module.exports = LookupApi = {

    init: function(keys, res) {

        searchKeys_inCouchbase(keys, callback);

        function callback(err, cbDocArray) {
            if (err) {
                console.log('ERROR THROWN');
                res.send(404, err);
            } else {
                solrIndexer(cbDocArray, res);
            }
        }
    }
};
