/**
 * Created by asonawane on 7/6/16.
 */
'use strict';

module.exports = {
    //for connecting to Gannett CB cluster
    gannett:  {
        // These fileds are taken from Local.js
        couchbase_cluster_ip :'' ,
        bucket_username: '' ,
        bucket_password: ''
    },

    local: {
        couchbase_cluster_ip: '127.0.0.1',
        bucket_username: 'travel-sample',

    },
    solrlocal: {
        host: 'localhost',
        port: 8983,
        path: '/solr',
        core: 'tester'
    }
}