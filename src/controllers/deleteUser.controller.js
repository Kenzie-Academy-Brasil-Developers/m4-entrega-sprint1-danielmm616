import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await deleteUserService(id);

  if (deletedUser === null) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserController;
