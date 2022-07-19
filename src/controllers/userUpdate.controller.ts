import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import userUpdateService from "../services/userUpdate.service";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, email, age }: IUserUpdate = req.body;

    const user = await userUpdateService({ id, name, email, age });

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default updateUserController;
