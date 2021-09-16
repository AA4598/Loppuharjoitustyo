import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import userService from './services/user-service';
import dataService from './services/data-service';

import Navigation from './nav/Navigation';
import LoginDialog from './components/LoginDialog';

const App = () => {

  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(false);


  const handleRegister = async (user) => {
    const data = await userService.register(user);

    return data;
  }


  const handleLogin = async (id, data, func) => {

    if (id === 1) {

      if (data !== null) {

        const response = await userService.login(data);


        if (response !== null) {
          if (response.code === 200) {

            setUser(response.data.email);
            setUserName(response.data.firstname);
            setToken(response.data.token);
          }
          return response;
        } else {

          return null;
        }

      }
    } else if (id === 2) {

      return await handleRegister(data);
    }

  }

  const getConfig = () => {

    let _token = `bearer ${token}`
    const config = {
      headers: { Authorization: _token }
    }

    return config;
  }


  const getMyData = async (user) => {

    return await dataService.getMyData(user, getConfig());

  }

  const addItem = async (data) => {

    //alert(await dataService.addItem(data, getConfig()));
    return await dataService.addItem(data, getConfig());
  }


  const deleteItem = async (id) => {

    return await dataService.deleteItem(id, getConfig());

  }

  const updateItem = async (id) => {

    return await dataService.updateItem(id, getConfig());

  }


  const callBack = async (topic, data) => {

    if (topic === 'getSummaryData') {

      const response = await dataService.getSummaryData(data);
      return response.data;

    } else if (topic === 'login') {


      setLogin(true);

    } else if (topic === 'logout') {

      setUserName('');

    } else if (topic === 'addItem') {

      //data.user = user;

      let response = await addItem(data);

      return response;

    } else if (topic === 'deleteItem') {

      let response = await deleteItem(data)
      return response;

    } else if (topic === 'updateItem') {

      return await updateItem(data)

    } else if (topic === 'getMyData') {

      const response = await getMyData(user);
      return response.data;
    }

  }

  return (
    <Container fluid>
      <div>
        <LoginDialog _show={login} showDialog={setLogin} func={handleLogin}></LoginDialog>
      </div>

      <Navigation user={userName} callBack={callBack} />
    </Container >
  )
}

export default App;