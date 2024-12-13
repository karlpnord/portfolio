import MyLinks from '../../util/MyLinks';
import OutlineButton from '../buttons/OutlineButton';

const Header = () => {
  return (
    <header className='h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-800 backdrop-blur-md'>
      <MyLinks />
      <OutlineButton handler={() => window.open('/Karl_Petter_Nordgaard_CV.pdf')}>My Resume</OutlineButton>
    </header>
  );
};

export default Header;