import axios from 'axios'

require('dotenv').config();
let baseUrl = '/api/user/';
if (process.env.NODE_ENV === 'development')
  baseUrl = 'http://localhost:5000/api/user/';

console.log(baseUrl);

const login = async (user) => {

  try {

    const _response = await axios.post(baseUrl + 'login', user);

    const response = {
      code: _response.status,
      data: _response.data
    }

    return response;

  } catch (exception) {


    let error = exception.response;

    if (error !== undefined) {

      let response = {
        code: error.status,
        message: error.data.error
      }

      return response;
    } else {

      return null;
    }

  }

}

const register = async (newUser) => {

  if (newUser === null) {
    return null
  }

  try {

    const response = await axios.post(baseUrl + 'register', newUser);

    let _response = {
      code: response.status,
      message: response.data.message
    }

    return _response;

  } catch (exception) {

    let error = exception.response;

    let response = {
      code: error.status,
      message: error.data.error
    }
    return response;
  }


}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, register }