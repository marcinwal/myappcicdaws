import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A newer version of CI/CD react project</h1>
        <h2>We now have Auth!</h2>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
