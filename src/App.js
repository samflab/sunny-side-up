import './App.css';
import Navigation from './components/Navbar';
import Body from './components/Body';
import Header from "./components/Header";
import Testimonial from './components/Testimonial';
import ImageGird from './components/ImageGrid';
import Footer from './components/Footer';
function App() {
  return (
  <div className="App">
    <Navigation/>
   <Header> </Header>
   <Body/>
   <Testimonial/>
   <ImageGird/>
   <Footer/>
  </div>
  );
}

export default App;