import { connectToDatabase } from "../../../../lib/mongodb";

export const insertOne = async (collection, query) => {
  const { db } = await connectToDatabase();
  const result = await db.collection(collection).insertOne(query);
  return result;
};
