import { MongoClient } from "mongodb";

declare global {
  namespace NodeJS {
    interface Global {
      mongo: {
        conn?: ReturnType<MongoClient.connect>;
        promise?: ReturnType<MongoClient.connect>;
      };
    }
  }
}
