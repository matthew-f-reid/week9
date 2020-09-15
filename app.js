const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
MongoClient.connect(url, function(err, client){
  if (err){
    return console.log(err);
  }
  const db = client.db(dbName);

  /*
  var add = require('./add.js');
  add.addData(db).then(res=>{
    console.log(res);
  });
  */  
  /*
  var add = require('./add.js');
  add.addData(db).then(res=>{
    console.log(res);
  });
  */
  /*
  var add = require('./add.js');
  add.addData(db).then(res=>{
    console.log(res);
  });
  */
  /*
  var add = require('./add.js');
  add.addData(db).then(res=>{
    console.log(res);
  });
  */
})
