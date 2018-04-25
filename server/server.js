const express = require('express');
const path = require('path');
var cors = require('cors');
var pg = require('pg');
var bodyParser = require('body-parser');
var _ = require('underscore');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const CONNECTION_STRING = process.env.DATABASE_URL;
var pool = new pg.Pool({
  connectionString: CONNECTION_STRING,
  ssl: true
});

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  app.set('port', PORT);
// Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
  app.use(cors());
  app.use(bodyParser.json());
// Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  app.get('/api/phrases', function (req, res) {
    pool.connect(function (err, client, done) {
      client.query("SELECT * FROM PhraseTable", function (err, result) {
        done();
        if (err) {
          console.log('Error', err);
          return res.json({error: err});
        }
        console.log('Select all succeeded in phrase table');

        res.json({phrases: result.rows});
      })
    })
  });

  app.post('/api/phrases', function (req, res) {
    let body = req.body;

    pool.connect(function (err, client, done) {
      let phrase = body.phrase || '';
      let author = body.author || 'Anonymous';
      let query = "INSERT INTO PhraseTable (text, author) VALUES ('" + phrase + "', '" + author + "')";

      console.log('Insert query:', query);

      client.query(query, function (err, result) {
        done();
        if (err) {
          console.log('Error', err);
          return res.json({error: err});
        }

        console.log('Success in post');
        res.json({});
      })
    })
  });

  app.delete('/api/phrases/:phraseId', function(req, res){
    pool.connect(function (err, client, done) {
      let phraseId = req.params.phraseId;
      console.log('Deleting phrase associated with ' + phraseId);
      let query = "DELETE FROM PhraseTable WHERE id='" + phraseId + "'";
      console.log(query);
      client.query(query, function (err, result) {
        done();
        if (err) {
          console.log('Error', err);
          return res.json({error: err});
        }

        console.log('Success in delete');
        res.json({});
      })
    })
  });
//
// All remaining requests return the React app, so it can handle routing.
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {

  });
}