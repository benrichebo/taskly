import { authenticate } from "../authentication";
import { find, findOne } from "../db/find";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const pinnedTasks = await findOne(
        "tasks",
        { _id: ObjectId(userId) },
        { projection: { pinnedTasks: 1 } }
      );

      if (pinnedTasks?._id) {
        res.status(200).json(pinnedTasks);
      } else {
        res.status(400).json({ msg: "There are no pinned tasks" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
