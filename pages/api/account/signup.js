/**
 * description: allows management users to login
 * params email: string, password: string
 * functions find: function, createJwt: function,
 * send response with {authToken: {email: string, role: string, userId: string, apiKey: string}}
 */
import { hash } from "bcrypt";
import moment from "moment";
import { findOne } from "../db/find";
import { insertOne } from "../db/insert";
import { createJwt } from "../jwt";

export default async (req, res) => {
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
  if (!results?.email) {
    //hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const date = new Date();

    const userData = {
      email,
      password: hashedPassword,
      role: "managers",
      createdAt: moment(date).format("lll"),
      verifiedEmail: false,
    };

    const response = await insertOne(userData);
    //fetch user after signup
    if (response.acknowledged === true) {
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
      res.status(404).json({ msg: "Signing up failed" });
    }
  } else {
    res.status(404).json({ msg: "User with email already exist" });
  }
};
