

import axios from 'axios';

require('dotenv').config();
let baseUrl = '/api/data/';
if (process.env.NODE_ENV === 'development')
  baseUrl = 'http://localhost:5000/api/data/';

console.log(baseUrl);

const getSummaryData = async (p) => {

  //alert(baseUrl + 'results/' + p);
  try {

    return await axios.get(baseUrl + 'results/' + p);

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

const getMyData = async (user, config) => {

  try {

    return await axios.get(baseUrl, config);

  } catch (exception) {

    let response = {
      code: 503,
      message: exception.message
    }
    return response;
  }
}

const deleteItem = async (id, config) => {

  try {
    return await axios.delete(baseUrl + id, config);
    //const response = await axios.delete(baseUrl + id, config);
    //return response.data
  } catch (exception) {

    let response = {
      code: 503,
      message: exception.message
    }
    return response;
  }

}

const updateItem = async (data, config) => {

  try {

    return await axios.put(baseUrl + data._id, data, config);
    //const response = await axios.put(baseUrl + data._id, data, config);
    // return response.data;

  } catch (exception) {

    let response = {
      code: 503,
      message: exception.message
    }
    return response;
  }
}

const addItem = async (data, config) => {

  try {

    return await axios.post(baseUrl, data, config);

  } catch (exception) {

    let response = {
      code: 503,
      message: exception.message
    }
    return response;
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default { addItem, deleteItem, getMyData, updateItem, getSummaryData }