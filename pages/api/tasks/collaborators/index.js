import { findOne } from "../db/find";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { taskId } = JSON.parse(req.body);

  if (userId) {
    if (req.method == "GET") {
      const collaborators = await findOne("tasks", {
        _id: ObjectId(userId),
        "collaborators.id": taskId,
      });

      if (collaborators._id) {
        res.status(200).json(tasks);
      } else {
        res.status(400).json({ msg: "There are no collaborators" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
};
