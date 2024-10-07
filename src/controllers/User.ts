import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/User.js";
import { hashPassword } from "../helpers/hashPassword.js";
import { signJwt } from "../helpers/signJwt.js";
import bcrypt from "bcrypt";
import { UpdateUserDTO, UserDTO, UserRequest } from "../types/User.dto.js";
import { validatePassword } from "../helpers/passwordValidation.js";
const userService = new UserService();
export const registerUser = async (
  request: UserRequest<UserDTO>,
  response: Response,
  next: NextFunction
) => {
  try {
    let { name, phone, email, password, user_type } = request.body;

    const existUser = await userService.getUser({ email });

    if (existUser) throw Error("User already exist");

    if (!validatePassword(password)) throw Error("Password must have Onelowercase, ONEuppercase, ONEnumber, ONE capital letter ,minimum length is 8 and maximum length is 16");

    const hashedPassword = await hashPassword(password);

    const user = await userService.createUser({
      name,
      phone,
      email,
      password: hashedPassword,
      user_type
    });
    const token = signJwt(user.id, user.email, user.user_type);
    return response.status(201).json({msg:"Registered Successfully",token});
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = request.body;
    const user = await userService.getUser({ email });

    if (!user) throw Error("User not found!");

    const isPassWordCorrect = await bcrypt.compare(password, user.password);

    if (!isPassWordCorrect) throw Error("Password is incorrect");

    const token = signJwt(user.id, user.email, user.user_type);
    return response.json({msg:"Login Success",token});
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  request: UserRequest<UpdateUserDTO>,
  response: Response,
  next: NextFunction
) => {
  try {
    let userData: any = request.body;
    let { email, password, ...updateUserData } = userData;
    const user = await userService.updateUser(request.body.user_id, {
      ...updateUserData
    });
    return response.json({ message: "Profile Updated Successfully" });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { current_password, new_password, user_id } = request.body;

    if (!current_password || !new_password) throw Error("Input Fields are missing!")
    const user = await userService.getUser({ id: user_id });

    const isPassWordCorrect = await bcrypt.compare(current_password, user.password);

    if (!isPassWordCorrect) throw Error("Current password is incorrect");

    const hashedPassword = await hashPassword(new_password);

    await userService.updateUser(user_id, { password: hashedPassword });

    return response.json({ message: "Password changed Successfully" });
  } catch (error) {
    next(error);
  }
};
