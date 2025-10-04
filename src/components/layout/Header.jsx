import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.svg';

const sectionLinks = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Menu', hash: '#menu' },
  { label: 'Testimonials', hash: '#testimonials' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (hash) => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSectionNav = (event, hash) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: hash } });
      return;
    }

    scrollToSection(hash);
  };

  return (
    <div className="header site-grid">
      <Link to="/" aria-label="Little Lemon Home">
        <img src={logo} alt="Little Lemon Logo" />
      </Link>
      <nav>
        <ul>
          {sectionLinks.map(({ label, hash }) => (
            <li key={hash}>
              <a href={hash} onClick={(event) => handleSectionNav(event, hash)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
