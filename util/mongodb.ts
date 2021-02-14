import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const { MONGO_URL, DB_NAME } = process.env;

if (!MONGO_URL) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}

if (!DB_NAME) {
  throw new Error(
    "Please define the DB_NAME environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGO_URL as string, opts).then(
      (client) => {
        return {
          client,
          db: client.db(DB_NAME),
        };
      }
    );
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

async function database(req: any, _: any, next: any) {
  const mongoConnect = await connectToDatabase();

  if (!mongoConnect.client.isConnected()) await mongoConnect.client.connect();
  req.dbClient = mongoConnect.client;
  req.db = mongoConnect.db;
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
