'use strict';

var solr = require('solr-client');
var config = require('config');
var solrConfig = config.solrlocal;

var client = solr.createClient(solrConfig );
client.autoCommit = true;


function indexSearch(solrqueryString, res) {

    console.log('indexSearchSTARTED');

    console.log('INPUT QUERY IS :' , solrqueryString);


    client.get('select', solrqueryString, function(err, obj){

        if(err){
            console.log('FAILED TO SEARCH IN INDEX!!')
            console.log(err);
            res.status(500).send(err);
        }
        else{
            console.log('INDEX SEARCH SUCCESSFUL  & RESULT : : ' + JSON.stringify(obj));
            res.status(200).send(obj);
        }
    });
}
module.exports = indexSearch;

