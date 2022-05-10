import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return null;
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return null;
  }

  const token = jwt.sign({ id: user.id }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};

export default userLoginService;
