import './Utility.css'
import './App.css';
import Header from './Header';
import Cover from './Cover';
import AboutUs from './AboutUs';
import ImageSlider from './ImageSlider';
import Blog from './Blog';
import Footer from './Footer';



function App() {
  return (
    <div className="app">
      <Header />
      <Cover />
      <AboutUs />
      <ImageSlider />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
