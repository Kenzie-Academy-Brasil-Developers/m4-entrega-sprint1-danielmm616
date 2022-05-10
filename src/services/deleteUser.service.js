import users from "../database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return null;
  }

  users.splice(userIndex, 1);

  return { message: "User deleted with success" };
};

export default deleteUserService;
