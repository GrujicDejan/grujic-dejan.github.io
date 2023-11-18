import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="fixed"></Navbar>
      </header>
      <body>
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
