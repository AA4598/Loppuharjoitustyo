const User = require('../models/user-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const login = async (request, response, next) => {

  const body = request.body

  // Mongo palauttaa null, jos emailia ei löydy kannasta   
  const user = await User.findOne({ email: body.email })

  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {

    return response.status(401).json({
      error: 'invalid username or password'
    })

  }

  const userForToken = {
    user: user.email,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.TOKEN)

  try {
    response
      .status(200)
      .send({ token: token, email: user.email, firstname: user.firstname, lastname: user.lastname, pro: user.pro })
  } catch (error) {

    console.error(error.message);
  }

}

const register = async (request, response, next) => {

  try {

    const { firstname, lastname, email, password, pro } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      firstname,
      lastname,
      email,
      passwordHash,
      pro
    })

    await user.save()

    try {
      return response.status(200).json({
        message: 'Registered succesfully, please login.'
      })

    } catch (error) {

      console.error("ERROR " + error.message);
    }

  } catch (exception) {

    return response.status(401).json({
      error: 'That email address is already in use'
    })


  }
};

exports.register = register;
exports.login = login;