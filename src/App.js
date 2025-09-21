import './App.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Highlights from './components/layout/Highlights';
import Testimonials from './components/layout/Testimonials';
import About from './components/layout/About';
import Footer from './components/layout/Footer';

function App() {
  return (
  <>
   <header>
      <Header />
    </header>

    <main>
      <section id="home"><Hero /></section>
      <section id="menu"><Highlights /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="about"><About/></section>
    </main>

    <footer>
      <Footer />
    </footer>
</>
  )
}

export default App;
