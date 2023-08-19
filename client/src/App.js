
import Messsenger from './components/Messsenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientid='110813284912-dkp0289j2e3b6m7egmut47mmsk9rglc8.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientid}>
      <AccountProvider>
        <Messsenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
