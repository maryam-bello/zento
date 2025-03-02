const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {getUserByEmail, createUser} = require('../models/userModel')

const signup = async function(req, res) {
  const { username, email, password } = req.body;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({message: 'User alreasy exists'});
    }

    await createUser(username, email, password);
    res.status(201).json({message: 'User create successfully'})
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error})
  }
}

const login = async function(req, res) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({message : 'Invalid credentials'});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({message: 'Invalid credentials'})
    }

    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'})
    res.status(200).json({message: 'Login successful', token})
  } catch (error) {
    res.status(500).json({message: 'Login error', error})
  }
}

module.exports = {signup, login}