import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { insertToArray, removeFromArray } from "../db/update";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  const collection = "tasks";

  if (req.method == "POST") {
    const date = new Date();

    const collaborator = {
      id,
      userId: req.body.id,
      ...req.body,
      createdAt: moment(date).format("lll"),
    };

    const data = {
      $push: { collaborators: { ...collaborator } },
    };

    //5. insert data into company collection
    const response = await insertToArray(
      collection,
      { _id: ObjectId(userId) },
      data,
      { upsert: true }
    );

    if (response.matchedCount === 1) {
      res.status(201).json({ msg: "Collaborator added successfully" });
    } else {
      res.status(401).json({ msg: "Adding collaborator failed" });
    }
  }
};
