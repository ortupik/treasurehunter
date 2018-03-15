var mysql = require('mysql');
var auth = require('./auth');
var posts = require('./bounds');

/*var db_config = {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'chowder60',
      database : 'action'
 };*/

var db_config = {
      host     : 'us-cdbr-iron-east-03.cleardb.net',
      user     : 'bbd50eeb6c5b16',
      password : '82ce0e82',
      database : 'heroku_4de60493bf2a61e',
 };

/*var db_config = {
      host     : 'sql11.freemysqlhosting.net',
      user     : 'sql11176628',
      password : 'm5SDm8Jf8W',
      database : 'sql11176628',
 };*/

    var connection;

    function handleDisconnect() {

      connection = mysql.createConnection(db_config);

      connection.connect(function(err) {
        if(err) {
          console.log('error when connecting to db:', err);
          setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }  else{
          console.log("Successfully connected to Db");
        }                                   // to avoid a hot loop, and to allow our node script to
      });                                     // process asynchronous requests in the meantime.
                                              // If you're also serving http, display a 503 error.
      connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
          handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
        }
      });
    }
 var getBounds = function(data,callback){
        bounds.getBounds(connection,data,function(result){
           callback(result); 
        });
 }
 var searchBounds = function(data,callback){
        bounds.searchBounds(connection,data,function(result){
           callback(result); 
        });
 }
 
    
    handleDisconnect();
    
    exports.getBounds = getBounds;
    exports.searchBounds = searchBounds;
    
    
    

