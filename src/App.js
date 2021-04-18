import './App.css';
import Routes from './routes';
import { AuthProvider } from './Provider/auth'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
