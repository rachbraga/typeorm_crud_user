import { Request, Response } from "express";
import userListOneService from "../services/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = await userListOneService(id);

    return res.send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;
