import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import { Navbar, NavItem, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { LinkContainer } from 'react-router-bootstrap';
import { HouseDoor } from 'react-bootstrap-icons';

import Homepage from '../routes/Homepage';
import AmResults from '../routes/AmResults';
import ProResults from '../routes/ProResults';
import MyTrainings from '../routes/MyTrainings';


const Navigation = ({ user, callBack }) => {

  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <LinkContainer to={'/'} exact>
          <NavItem className='mr-auto'>
            <Button variant='success'><HouseDoor color="white" size={22} /></Button>
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/AmResults'} exact>
          <NavItem>
            <Button>Harrastajat</Button>
          </NavItem>
        </LinkContainer>

        {user &&
          <>
            <LinkContainer to={'/ProResults'} exact>
              <NavItem className='mr-auto'>
                <Button>Ammattiaiset</Button>
              </NavItem>
            </LinkContainer>

            <LinkContainer to={'/MyTrainings'} exact>
              <NavItem>
                <Button>Omat treenit</Button>
              </NavItem>
            </LinkContainer>
            <div className='ml-auto' style={{ paddingRight: '15px' }}>{'Kirjautunut: ' + user}</div>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Button variant='dark' onClick={() => { callBack("logout") }}>Logout</Button>
              </NavItem>
            </LinkContainer>
          </>
        }

        {!user &&

          < NavItem className='ml-auto'>
            <Button variant='info' onClick={() => { callBack("login") }}>Login</Button>
          </NavItem>

        }
      </Navbar>

      <Switch>
        <Route path="/AmResults">
          <AmResults callBack={callBack} />
        </Route>
        <Route path="/ProResults">
          {user ? <ProResults callBack={callBack} user={user} /> : <Redirect to="/" />}
        </Route>
        <Route path="/MyTrainings">
          {user ? <MyTrainings callBack={callBack} user={user} /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
        <Redirect to="/" />
      </Switch>

    </Router>
  )
}
export default Navigation