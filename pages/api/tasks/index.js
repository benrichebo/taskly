import { find, findOne } from "../db/find";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const tasks = await findOne(
        "tasks",
        { _id: ObjectId(userId) },
        { projection: { tasks: 1 } }
      );

      if (tasks?._id) {
        res.status(200).json(tasks);
      } else {
        res.status(400).json({ msg: "There are no tasks" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
};
