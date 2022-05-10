import users from "../database";

const getUserDataService = (id) => {
  const user = users.find((user) => user.id === id);
  return user;
};

export default getUserDataService;
