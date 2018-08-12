var mysql = require('mysql').Client;

alert("jajaja");

var con = mysql.createConnection({
  host: "localhost",
  user: "id3864300_fabi",
  password: "fabi96"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});