import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import userDeleteController from "../controllers/userDelete.controller";
import userListController from "../controllers/userList.service";
import userListOneController from "../controllers/userListOne.service";
import updateUserController from "../controllers/userUpdate.controller";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", userListController);
userRoutes.get("/:id", userListOneController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", userDeleteController);

export default userRoutes;
