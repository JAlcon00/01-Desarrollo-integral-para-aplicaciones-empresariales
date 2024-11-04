require('dotenv').config();
const { MongoClient } = require('mongodb');

// Construir la URL de conexión
const user = process.env.user;
const password = process.env.password;
const cluster = process.env.cluster;
const dbName = process.env.dbname;
const collectionName = process.env.collection;
const url = `mongodb+srv://${user}:${password}@${cluster}.uoxe6ek.mongodb.net/${dbName}?retryWrites=true&w=majority`;

if (!url || !dbName || !collectionName) {
  console.error('Please make sure that .env file is correctly configured.');
  process.exit(1);
}

const client = new MongoClient(url);

async function run() {
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Find the first document in the collection
      const first = await collection.findOne();
      console.log(first);
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
}
run().catch(console.error);