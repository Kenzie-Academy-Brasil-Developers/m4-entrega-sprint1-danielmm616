import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const userLogin = userLoginService(email, password);

  if (userLogin === null) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  return res.json({ token: userLogin });
};

export default userLoginController;
