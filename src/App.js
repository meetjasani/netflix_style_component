import './App.css';
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, SignIn, SignUp, Browse} from './pages';
import * as ROUTES from './constant/router'
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { useAuthListener } from './hooks';


export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
