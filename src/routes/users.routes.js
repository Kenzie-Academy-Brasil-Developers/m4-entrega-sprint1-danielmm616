import { Router } from "express";

//Controllers
import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import userLoginController from "../controllers/userLogin.controller";
import getUserDataController from "../controllers/getUserData.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import updateUserController from "../controllers/updateUser.controller";

// Middlewares
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAdminStatusMiddleware from "../middlewares/verifyAdminStatus.middleware";
import verifyIdAndIsAdminMiddleware from "../middlewares/verifyIdAndIsAdmin.middleware";

const router = Router();

// Routes
router.post("/users", verifyEmailAvailabilityMiddleware, createUserController);
router.post("/login", userLoginController);
router.get("/users/profile", verifyAuthTokenMiddleware, getUserDataController);
router.delete(
  "/users/:id",
  [verifyAuthTokenMiddleware, verifyIdAndIsAdminMiddleware],
  deleteUserController
);
router.get(
  "/users",
  [verifyAuthTokenMiddleware, verifyAdminStatusMiddleware],
  listUsersController
);
router.patch(
  "/users/:id",
  [verifyAuthTokenMiddleware, verifyIdAndIsAdminMiddleware],
  updateUserController
);

export default router;
