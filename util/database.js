const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (cb) => {
  MongoClient.connect('mongodb+srv://freakybug:Freakybug@307@sandbox.8fmzx.mongodb.net/shop?retryWrites=true&w=majority').then(client => {
    console.log('connect success')
    _db = client.db();
    cb();
  }).catch(err => {
    console.log(err)
    throw err;
  });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;