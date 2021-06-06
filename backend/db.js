const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/PizzaDB";
let db;

const initDB = callback => {
    if(db){
        return callback(null , db);         //Database is already initialized
    } else {
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(client => {
            db = client;
            callback(null, db);
        }).catch(err => callback(err));
    }
}

const getDB = () => {
    if(!db){
        throw new Error('Database is not initalized');
    } else {
        return db;
    }
}

module.exports = { initDB, getDB };