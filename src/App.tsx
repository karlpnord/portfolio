import Header from './components/header/Header';
import SideNav from './components/header/SideNav';

const App = () => {
  return (
    <div className='grid grid-cols-[54px_1fr]'>
      <SideNav />
      <main className='bg-zinc-800'>
        <Header />
        <div className='mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24'>
          Hero
          Projects
          About
          Contact
        </div>
      </main>
    </div>
  );
};

export default App;
