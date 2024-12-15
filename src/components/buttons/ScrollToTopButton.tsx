import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTopButton = () => {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed z-50 text-textWhite bottom-4 right-4 p-3 sm:p-4 rounded-full bg-primaryLight bg-opacity-30 backdrop-blur-sm cursor-pointer hover:scale-110 hover:bg-opacity-50 active:scale-90 transition-all'
    >
      <AiOutlineArrowUp size={18} />
    </div>
  );
};

export default ScrollToTopButton;
