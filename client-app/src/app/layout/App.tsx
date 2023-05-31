import { useEffect } from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';


function App() {

  const { activityStore } = useStore();

  useEffect(() => {

    activityStore.loadActivitites();
  }, [activityStore])



  if (activityStore.loadingInitial)
    return <LoadingComponent content='Loading App'></LoadingComponent>
  return (
    <>
      <NavBar></NavBar>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard></ActivityDashboard>
      </Container>

    </>
  );
}

export default observer(App);
