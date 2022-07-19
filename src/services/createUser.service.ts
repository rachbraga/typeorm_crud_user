import { IUserRequest } from "../interfaces/users";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserRequest): Promise<User> => {
  const userRespository = AppDataSource.getRepository(User);

  const findUser = await userRespository.findOne({
    where: {
      email: email,
    },
  });
  if (findUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hash(password, 10);

  const user = userRespository.create({
    name,
    email,
    password: hashedPassword,
    age,
  });
  await userRespository.save(user);
  return user;
};

export default createUserService;
