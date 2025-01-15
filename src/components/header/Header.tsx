import MyLinks from '../../util/MyLinks';
import OutlineButton from '../buttons/OutlineButton';

const Header = () => {
  return (
    <header className='h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-bgLight bg-opacity-50 backdrop-blur-md'>
      <MyLinks />
      <OutlineButton handler={() => window.open('/CV_Karl_Nordgaard_English.pdf')}>My Resume</OutlineButton>
    </header>
  );
};

export default Header;