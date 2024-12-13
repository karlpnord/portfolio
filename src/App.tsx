import Header from './components/header/Header';
import SideNav from './components/header/SideNav';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <div className='grid grid-cols-[54px_1fr] bg-bgLight'>
      <SideNav />
      <main className='bg-bgLight'>
        <Header />
        <div className='mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24'>
          <Hero />
          About
          Projects
          Contact
        </div>
      </main>
    </div>
  );
};

export default App;
