import { User } from "./usersModel.js";

//get all users
export class userServices {
  getAllUsers = async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
}
