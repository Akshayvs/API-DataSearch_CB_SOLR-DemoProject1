# SOLR-Index&Search

This is a demo API Project which is usied for searching a json object based on an SOLR query which is provided to the API via an HTTP Request.

Working :

Takes as input a SOLR query passed via a HTTP request using POSTMAN or any Browser.
The Http request is parsed and filtered and the SOLR query is extracted
The query is parsed to map the SOLR object from the Index to the couchbase ,else return error
IF match is found, the JSON object is retreived from Couchbase and returned back.


To run the project , follow these steps.
  1. Install JetBrains Webstorm IDE for best results and easy test coverage reports.
  2. Navigate to the project Directory and Install the package.json
  3. Setup SOLR on your local machine and run it on local host . Instruction : http://lucene.apache.org/solr/
  4. Setup couchbase on Localhost or you can also configure a remote couchbase - i am using Gannett dev  via my local.js config file
  5. Run index.js and follow the instructions flashed in console.
  

  PS:  The code is unit tested with a 98% test coverage using Istanbul cover.
       Integration Tests are under Dev
   

### Cloning The GitHub Repository
```
$ git clone https://github.com/akshayvs/SOLR-Index&Search
```
