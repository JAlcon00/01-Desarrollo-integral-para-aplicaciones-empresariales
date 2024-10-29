const { MongoClient } = require('mongodb');

/*
const user = 'JoeAlcon00';
const password = 'VBPmelfdcTm2UlG6';
const cluster = 'cluster0';
const dbname = 'PROJECT 0';
const collection = 'blog';
const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
*/


const url = 'mongodb+srv://JoeAlcon00:VBPmelfdcTm2UlG6@cluster0.uoxe6ek.mongodb.net/';
const client = new MongoClient(url);

async function run() {
    try {
      await client.connect();
      const db = client.db('blog');
      const collection = db.collection('Usuarios');
  
      // Find the first document in the collection
      const first = await collection.findOne();
      console.log(first);
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }
  run().catch(console.error);
