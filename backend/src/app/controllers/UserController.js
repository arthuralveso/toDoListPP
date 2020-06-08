const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../../config/auth');


class UserController {
  async store(request, response) {
    try {
      const user = await User.create(request.body);

      return response.json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async userSession(request, response) {
    const { username, password } = request.body;
    const user = await User.findOne({ username });

    if (!user) {
      return response.status(400).json({ error: 'User not found' });
    }

    if (!await bcrypt.compare(password, user.password)) {
      return response.status(400).json({ error: 'Invalid password' });
    }

    return response.json({
      username,
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new UserController();
