import { authenticate } from "../../authentication";
import { find, findOne } from "../../db/find";
import { verifyUser } from "../../verification";

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const collaborators = await findOne(
        "collaborators",
        { _id: ObjectId(userId) },
        { projection: { collaborators: 1 } }
      );

      if (collaborators?._id) {
        res.status(200).json(collaborators);
      } else {
        res.status(400).json({ msg: "There are no collaborators" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
