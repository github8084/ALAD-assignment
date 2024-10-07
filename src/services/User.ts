import  User from '../database/models/User.js'; 
import { UserDTO, UpdateUserDTO } from '../types/User.dto.js'; 

export class UserService {
  // Create a new user
  async createUser(data: UserDTO): Promise<UserDTO> {
    const user = await User.create(data);
    return user.toJSON() as UserDTO; 
  }

  // Get a user by query
  async getUser(query): Promise<UserDTO | null> {
    const user = await User.findOne({where:query});
    return user ? (user.toJSON() as UserDTO) : null;
  }

  // Get all users
  async getAllUsers(query): Promise<UserDTO[]> {
    const users = await User.findAll({where:query});
    return users.map(user => user.toJSON() as UserDTO);
  }

  // Update a user by ID
  async updateUser(id: string, data: UpdateUserDTO): Promise<UserDTO | null> {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(data);
      return user.toJSON() as UserDTO;
    }
    return null;
  }

  // Delete a user by ID
  async deleteUser(id: string): Promise<boolean> {
    const result = await User.destroy({ where: { id } });
    return result > 0;
  }
}