import Header from './components/header/Header';
import SideNav from './components/header/SideNav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div style={{ gridTemplateColumns: 'minmax(32px, 48px) 1fr' }} className='grid bg-bgLight relative'>
      <SideNav />
      <main className='bg-bgLight relative'>
        <Header />
        <div className='w-[84%] max-w-5xl sm:w-full px-3 sm:px-4 md:px-8 space-y-12 sm:space-y-24 md:space-y-32 pb-24'>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
