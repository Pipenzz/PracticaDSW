import { MongoClient, Db} from "mongodb";

const connectionstring = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/'

const cli = new MongoClient(connectionstring)
await cli.connect()

export let db:Db=cli.db('torneoesports')