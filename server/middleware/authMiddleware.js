const jwt = require('jsonwebtoken');
require('dotenv').config({path: '../config/.env'});

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  console.log(token);

  if (!token) {
    return res.status(403).json({message: 'Access denied'})
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({message: 'Invalid token'});
    }

    req.user = user;

    next();
  })

}

module.exports = {authenticateJWT};