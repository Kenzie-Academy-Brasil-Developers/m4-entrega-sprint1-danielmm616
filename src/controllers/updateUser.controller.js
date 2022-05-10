import updateUserService from "../services/updateUser.service";

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updateUser = await updateUserService(id, body);

  return res.json(updateUser);
};

export default updateUserController;
