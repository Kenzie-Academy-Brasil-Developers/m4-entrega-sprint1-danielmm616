import users from "../database";

const verifyAdminStatusMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  let userInfo = (token.split(".")[1] = Buffer.from(
    token.split(".")[1],
    "base64"
  ).toString());

  let userId = JSON.parse(userInfo).id;

  const isAdm = users.find((user) => user.id === userId).isAdm;

  if (!isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyAdminStatusMiddleware;
