import jwt from "jsonwebtoken";
import users from "../database";

const verifyIdAndIsAdminMiddleware = (req, res, next) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(400).json({ message: "User not found" });
  }

  const token = req.headers.authorization;
  const userId = jwt.decode(token).id;
  const isAdm = users.find((user) => user.id === userId).isAdm;

  if (!isAdm && userId !== id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyIdAndIsAdminMiddleware;
