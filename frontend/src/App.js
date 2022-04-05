import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './pages/Home';
import Footer from "./components/general/Footer"
import Navbar from './components/general/Navbar'
function App() {
  return (
    <>
        <Navbar/>
        <Home/>

   
        <Footer />
    </>
  );
}

export default App;
