import { CallToAction } from '../CallToAction';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Form } from '../Form';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { Shortens } from '../Shortens';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Shortens />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export { App };
