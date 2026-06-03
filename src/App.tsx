import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import {
  Hero,
  SearchBar,
  Destinations,
  Services,
  Map,
  WhyChooseUs,
  Testimonials,
  FAQ,
  GetInTouch,
} from './components/sections';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SearchBar />
        <Destinations />
        <Services />
        <Map />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}

export default App;
