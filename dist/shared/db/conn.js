import { MongoClient } from "mongodb";
const connectionstring = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const cli = new MongoClient(connectionstring);
await cli.connect();
export let db = cli.db('torneoesports');
//# sourceMappingURL=conn.js.map