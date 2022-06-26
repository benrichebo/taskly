import { ObjectId } from "mongodb";
import { deleteOne } from "../db/delete";
import { findOneAndUpdate } from "../db/update";
import { deleteItem } from "../functions/delete";
import { createJwt } from "../jwt";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId && role == "manager")
    if (req.method == "PUT") {
      //1. check for method
      //if method does not exist
      const body = JSON.parse(req.body);

      const response = await findOneAndUpdate(
        "managers",
        { _id: ObjectId(body?.id) },
        req.body
      );

      if (response?.email) {
        const { _id, email, role, fullName } = response;

        const jwt = createJwt({
          userId: _id,
          email,
          role,
        });

        const data = {
          authToken: jwt,
          id: _id,
          email: email,
          fullName: fullName,
          phone: phone,
          role,
        };

        res.status(200).json(data);
      } else {
        res.status(404).json({ msg: "Update failed" });
      }
    }

  if (method == "DELETE") {
    const response = await deleteOne("managers", userId);

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "User was successfully deleted" });
    } else {
      res.status(400).json({ msg: "User was not deleted" });
    }
  }
};
