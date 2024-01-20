import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './component/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout color="#ffffff" />
    </BrowserRouter>
  );
}

export default App;
