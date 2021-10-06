import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
