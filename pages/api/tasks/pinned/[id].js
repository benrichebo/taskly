import { ObjectId } from "mongodb";
import { findOne } from "../../db/find";
import { removeFromArray } from "../../db/update";
import { verifyUser } from "../../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const pinnedTask = await findOne("tasks", {
      _id: ObjectId(userId),
      "pinnedTasks.id": id,
    });

    if (pinnedTask?.id) {
      res.status(200).json(pinnedTask);
    } else {
      res.status(400).json({ msg: "There is no pinnedTask" });
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { pinnedTasks: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "Pinned task was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Pinned task was not deleted" });
    }
  }
};
