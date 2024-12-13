import Header from './components/header/Header';
import SideNav from './components/header/SideNav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className='flex bg-bgLight'>
      <SideNav />
      <main className='flex-1 bg-bgLight overflow-x-hidden'>
        <Header />
        <div className='mx-auto max-w-5xl px-3 sm:px-4 md:px-8 space-y-12 sm:space-y-24 md:space-y-32 pb-24'>
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
