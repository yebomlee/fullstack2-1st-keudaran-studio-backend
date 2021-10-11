import { userService } from '../services';

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    console.log(user);

    res.cookie('user', user.token);
    res.status(201).json({ message: user.message });
  } catch (err) {
    const { statusCode, message } = err;
    res.status(statusCode).json({
      message,
    });
  }
};

export default { signInUser };
