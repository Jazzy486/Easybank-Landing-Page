import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigation from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  

  return (
    
      <div>
              <Navigation/>
              <HeroSection/>
              <Features/>
              <Articles/>
              <Footer/>

      </div>
  )
}

export default App
