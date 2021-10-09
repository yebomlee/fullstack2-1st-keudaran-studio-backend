import { userService } from '../services';

const getAlluser = async (req, res) => {
  const user = await userService.getAlluser();
  res.json(user);
};

export default { getAlluser };
