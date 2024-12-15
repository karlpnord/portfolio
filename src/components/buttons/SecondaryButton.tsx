import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler: () => void;
  children: ReactNode;
  className?: string;
}

const SecondaryButton = ({ clickHandler, children, className }: Props) => {
  return (
    <button
      onClick={clickHandler}
      className={twMerge(
        'bg-secondary text-secondaryContent px-4 py-2 ml-1 rounded-md font-medium overflow-hidden relative transition-transform hover:scale-105 active:scale-95',
        className
      )}
    >
      <span className='relative z-10'>{children}</span>
      <motion.div
        initial={{ left: 0 }}
        animate={{ left: '-200%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'linear',
        }}
        className='bg-[linear-gradient(to_right,#21d760,#213dd7)] absolute z-0 inset-0 w-[400%]'
      ></motion.div>
    </button>
  );
};



export default SecondaryButton;
