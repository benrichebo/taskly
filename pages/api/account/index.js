import { ObjectId } from "mongodb";
import { deleteOne } from "../db/delete";
import { findOne } from "../db/find";
import { findOneAndUpdate } from "../db/update";
import { createJwt } from "../jwt";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const method = req.method;

  if (userId && method == "PUT") {
    //1. check for method
    //if method does not exist
    const body = JSON.parse(req.body);

    const response = await findOneAndUpdate(
      "users",
      { _id: ObjectId(body?.id) },
      req.body
    );

    if (response?.upsertedCount == 1) {
      const user = await findOne("users", { _id: ObjectId(userId) });

      const { _id, email, name } = user;

      const jwt = createJwt({
        userId: _id,
      });

      const data = {
        authToken: jwt,
        id: _id,
        email,
        name,
      };

      res.status(200).json(data);
    } else {
      res.status(404).json({ msg: "Update failed" });
    }
  }

  if (userId && method == "DELETE") {
    const response = await deleteOne("users", { _id: ObjectId(userId) });

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "User was successfully deleted" });
    } else {
      res.status(400).json({ msg: "User was not deleted" });
    }
  }
};
