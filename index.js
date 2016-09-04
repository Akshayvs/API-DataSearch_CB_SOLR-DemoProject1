'use strict';

var bodyParser = require('body-parser');
var lodash = require('lodash');
var lookupApi = require('./lib/lookupApi');
var indexSearch = require('./lib/indexSearch');

var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function main() {
    var keys;
    app.get('/couchbaseid/:key', function(request, response) {

        var stringofKeys_inRequest = request.params.key; // primary key to search the DB
        var string_withoutSpace = stringofKeys_inRequest.replace(/ /g, ''); // elinimating whitespaces from the string
        var keys_withDuplicate = string_withoutSpace ? string_withoutSpace.split(',') : [];  // array is created from string
        keys = lodash.uniq(keys_withDuplicate); // Eliminating duplicates
        console.log(keys);
        lookupApi.init(keys, response);

    });
}
main();
app.get('/solrquery/:key', function(request, response) {

    var solrqueryString = request.params.key;
    indexSearch(solrqueryString, response);

});

app.listen(8014, function() {
    console.log('1. SERVER ACTIVE:');
    console.log('\n Hit the Link : http://127.0.0.1:8014/couchbaseid/asset_-1464108288001_assetlite');
});
