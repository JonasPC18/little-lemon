import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
