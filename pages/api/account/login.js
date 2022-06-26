/**
 * description: allows management users to login
 * params email: string, password: string
 * functions find: function, createJwt: function,
 * send response with {authToken: {email: string, role: string, userId: string, apiKey: string}}
 */
import { compare } from "bcrypt";
import { findOne } from "../db/find";
import { createJwt } from "../jwt";
import { statusCode405 } from "../status/codes";

export default async (req, res) => {
  //res.status(200).json({ ...JSON.parse(req.body) });
  //const body = JSON.parse(JSON.parse(req.body));
  const { email, password } = JSON.parse(req.body);

  //1. check for method
  //if method does not exist
  if (req.method !== "POST") {
    return statusCode405(res);
  }

  //2. find if user exist in db using email address

  const results = await findOne(
    "managers",
    { email },
    {
      projection: { megos: 0 },
    }
  );

  //3. compare the results password to the req password
  if (results?.email) {
    const match = await compare(password, results?.password);
    //4. if user exist, create jwt
    if (match) {
      const { _id, email, role, fullName, phone } = results;
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
      //5. if user doesn't exist, send error
      res.status(400).json({ msg: "Invalid credentials" });
    }
  } else {
    res.status(404).json({ msg: "Email does not exist" });
  }
};
