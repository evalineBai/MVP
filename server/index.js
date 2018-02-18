const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
const request = require('request');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.post('/accounts', function(req, response) {
  let address = req.body.address;

  let options = {
    url: `https://api.blockcypher.com/v1/btc/main/addrs/${address}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'request'
    }
  };
  request(options, function(err, res, body) {
    if (err) {
      console.log(err);
    }

    let data = JSON.parse(body);
    if (data.txrefs === undefined) {
      let transactions = [{
        hash: 'unavailable',
        amount: 0,
        date: 'unavailable'
      }]
    } else {
      transactions = data.txrefs.map((trans) => {
        return {
          hash: trans.tx_hash,
          amount: trans.value,
          date: trans.confirmed
        }
      });
    }
    let blockData = {
      address: data.address,
      balance: data.balance,
      sent: data.total_sent,
      received: data.total_received,
      recent_transactions: transactions
    }
    db.save(blockData, function() {
      response.send('Successful Request');
    });
  });

})

app.get('/accounts', function(req, res) {
  db.Account.find(req.query).exec(function(err, account) {
    if (err) {
      console.log(err);
    }
    res.status(200).send(account);
  });
});

app.listen(8080, function() {
  console.log('listening on port 8080');
});



