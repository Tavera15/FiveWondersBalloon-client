import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import NavigationBar from './Components/Navigation Bar/NavigationBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Routes>

          <Route exact path='/' element={<HomePage />}></Route>

          <Route exact path='services' element={<ServicesPage />}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
