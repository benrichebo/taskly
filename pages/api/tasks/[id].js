import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { insertToArray, removeFromArray } from "../db/update";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const task = await findOne("tasks", {
      _id: ObjectId(userId),
      "tasks.id": id,
    });

    const collaborators = await findOne("tasks", {
      _id: ObjectId(userId),
      "collaborators.id": task?.id,
    });

    if (task?.id) {
      res.status(200).json(task, collaborators);
    } else {
      res.status(400).json({ msg: "There are no tasks" });
    }
  }

  if (req.method == "PUT") {
    const { title, description, startDate, endDate, collaborators } =
      JSON.parse(req.body);
    const data = {
      $set: {
        "tasks.$[elem].title": title,
        "tasks.$[elem].description": description,
        "tasks.$[elem].startDate": startDate,
        "tasks.$[elem].endDate": endDate,
        "tasks.$[elem].collaborators": collaborators,
      },
    };

    const results = await insertToArray(
      collection,
      { _id: ObjectId(userId) },
      data,
      { arrayFilters: [{ "elem.id": id }] },
      {
        upsert: true,
      }
    );

    if (results.matchedCount === 1) {
      res.status(200).json({ msg: "Order updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { tasks: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "Task was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Task was not deleted" });
    }
  }
};
