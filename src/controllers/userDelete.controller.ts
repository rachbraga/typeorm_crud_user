import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = await deleteUserService(id);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteController;
