import { ObjectId } from "mongodb";
import { deleteOne } from "../db/delete";
import { findOne } from "../db/find";
import { findOneAndUpdate } from "../db/update";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId, role } = await verifyUser(req);

  const { id } = req.query;

  if (userId && role == "manager") {
    if (req.method == "GET") {
      const business = await findOne("businesses", { _id: ObjectId(id) });

      if (business?.email) {
        res.status(200).json(business);
      } else {
        res.status(400).json({ msg: "Business was not found" });
      }
    }

    if (req.method == "PUT") {
      const response = await findOneAndUpdate(
        "businesses",
        { _id: ObjectId(id) },
        req.body
      );

      if (response?.email) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ msg: "Update failed" });
      }
    }

    if (method == "DELETE") {
      const response = await deleteOne("businesses", id);

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "User was successfully deleted" });
      } else {
        res.status(400).json({ msg: "User was not deleted" });
      }
    }
  } else {
    res.status(400).json({ msg: "You are not authorized" });
  }
};
