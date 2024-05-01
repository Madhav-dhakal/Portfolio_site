import Navbar from "./components/navbar/navbar";
import "./App.css"
import Intro from "./components/intro/intro";
import Experience from "./components/experience/experience";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";



function App() {
  return (
    
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
