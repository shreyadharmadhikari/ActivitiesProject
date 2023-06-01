import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';


function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <HomePage></HomePage> : (
        <>
          <NavBar></NavBar>
          <Container style={{ marginTop: '7em' }}>
            <Outlet></Outlet>
          </Container>
        </>
      )}

    </>
  );
}

export default observer(App);
