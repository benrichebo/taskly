import { find } from "../db/find";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId && role == "manager") {
    if (req.method == "GET") {
      const businesses = await find("businesses", { managerId: userId });

      if (businesses?.length >= 0) {
        res.status(200).json(businesses);
      } else {
        res.status(400).json({ msg: "There are no businesses" });
      }
    }
  } else {
    res.status(400).json({ msg: "You are not authorized" });
  }
};
