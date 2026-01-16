import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Insider from './components/Insider.jsx';
import Sequence from './components/Sequence.jsx';
import Benefits from './components/Benefits.jsx';
import Reviews from './components/Reviews.jsx';
import Flavour from './components/Flavour.jsx';
import Payment from './components/Payment.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Loader />
      <div className="page-wrapper">
        <Navbar />
        <Hero />
        <Insider />
        <Sequence />
        <Benefits />
        <Reviews />
        <Flavour />
        <Payment />
        <Footer />
      </div>
    </>
  );
}
