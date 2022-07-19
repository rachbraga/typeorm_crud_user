import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";

const userUpdateService = async ({ id, name, email, age }: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    throw new Error("User not found!");
  }

  name ? (user.name = name) : user.name;
  email ? (user.email = email) : user.email;
  age ? (user.age = age) : user.age;
  user.updated_at = new Date();

  await userRepository.update(user.id, user);

  return { message: `${user.name} has been updated` };
};

export default userUpdateService;
