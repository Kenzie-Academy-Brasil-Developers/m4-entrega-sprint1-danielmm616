import users from "../database";
import jwt from "jsonwebtoken";

const updateUserService = (id, body) => {
  const userIndex = users.findIndex((user) => user.id === id);

  const { ["isAdmin"]: omitted, ...rest } = body;

  users[userIndex] = { ...users[userIndex], ...rest };

  users[userIndex].updatedOn = new Date();

  return users[userIndex];
};

export default updateUserService;
