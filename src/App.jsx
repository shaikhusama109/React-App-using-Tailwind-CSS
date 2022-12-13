import './App.css';
import { Analytics } from './Components/Analytics';
import { Cards } from './Components/Cards';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
import Hero from './Components/Hero';
import { Newsletter } from './Components/Newsletter';


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
      </>
  );
}

export default App;
