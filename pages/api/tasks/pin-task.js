import { authenticate } from "../authentication";
import moment from "moment";
import { verifyUser } from "../verification";
import { ObjectId } from "mongodb";
import { findOneAndUpdate, insertToArray } from "../db/update";

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  const collection = "tasks";

  const method = req.method;

  const { id } = JSON.parse(req.body);

  try {
    if (method === "POST") {
      //5. insert data into company collection
      const data = {
        $set: { pinnedTask: id },
      };

      const response = await findOneAndUpdate(
        collection,
        {
          _id: ObjectId(userId),
        },
        data
      );

      if (response.acknowledged === true) {
        res.status(201).json({ msg: "Pin task added successfully" });
      } else {
        res.status(401).json({ msg: "Adding pin task failed" });
      }
    }

    if (method === "GET") {
      const pinnedTask = await findOne(
        "tasks",
        {
          _id: ObjectId(userId),
        },
        { projection: { pinnedTask: 1 } }
      );

      if (pinnedTask?.id) {
        res.status(200).json(pinnedTask);
      } else {
        res.status(400).json({ msg: "There are no pinned task" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
