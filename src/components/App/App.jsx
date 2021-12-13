import {Header} from 'components/Header';
import {Hero} from 'components/Hero';
import {Form} from 'components/Form';
import {Shortens} from 'components/Shortens';
import {Features} from 'components/Features';
import {CallToAction} from 'components/CallToAction';
import {Footer} from 'components/Footer';


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

export {App};
