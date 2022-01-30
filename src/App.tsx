import Header from './Components/Header';
import Cover from './Components/Cover';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import './Utility.css'
import './App.css';
import ImageSlider from './Components/ImageSlider';


function App() {
  return (
    <div className="app">
            <Header/>
            <Cover/>
            <AboutUs/>
            <ImageSlider/>
            <Blog/>
            <Footer/>
    </div>
  );
}

export default App;
