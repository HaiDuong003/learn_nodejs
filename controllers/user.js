import User from "../models/user";

export const userById = async (request, response, next, id) => {
  try {
    const user = await User.findById(id).exec();
    if (!user) {
      return response.status(400).json({ message: "User không tồn tại" })
    }
    request.profile = user;
    request.profile.password = undefined;
    next();
  } catch (error) {

  }
}