import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import NavigationBar from './Components/Navigation Bar/NavigationBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <HomePage />
        <Footer />
    </div>
  );
}

export default App;
