import { AppDataSource } from "../../../database/data-source";
import User from "../entity/User";

export const UserRepository = AppDataSource.getRepository(User);
