'use strict';

var config = require('config');
var solrConfig = config.solrlocal;
var path = require('path');
var solr = require('solr-client');
var client = solr.createClient(solrConfig);
client.autoCommit = true;

// function connects to a solr client and indexes to solr; the documents provided as input.
// at the end of everything, sends a html file to continue with the second part of the program

function solrIndexer(cbDocArray, res) {
    var count = 0;
    var cbDoc_Arraylength = cbDocArray.length;

    cbDocArray.forEach(function(cbDoc) {
        count++;
        client.add(cbDoc, function(err) {
            if (err) {
                console.log(err);
                console.log('SOLR INTERFACE CRASHED \n');
                res.send(200, err);
            } else {
                client.softCommit();
                //console.log('SOLR RESPONSE:\n', obj);
            }
        });
    });

    if (count == cbDoc_Arraylength) {
        res.send({message: 'Document successfully Indexed , ready for search'}) ;
        console.log('DOCUMENT INDEXED\n');
        console.log('ENTER SOLR QUERY @ : http://127.0.0.1:8014/solrQuery/q=*:*&fq=assetTypeName:video-playlist&fq=Status:published\n\n\n');
        console.log('===============================================  PART 2  ===================================================================================================================\n\n\n');
    }
}
module.exports = solrIndexer;
