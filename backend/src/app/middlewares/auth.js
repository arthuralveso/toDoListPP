const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');

module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    await promisify(jwt.verify)(token, authConfig.secret);
  } catch (error) {
    return response.status(401).json({ error: 'Invalid token' });
  }

  return next();
};
