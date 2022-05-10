import getUserDataService from "../services/getUserData.service";
import jwt from "jsonwebtoken";

const getUserDataController = (req, res) => {
  let token = req.headers.authorization;

  let userId = jwt.decode(token).id;

  const user = getUserDataService(userId);

  return res.json({
    uuid: user.id,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
  });
};

export default getUserDataController;
