import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

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
        'bg-secondary text-secondaryContent px-4 py-2 rounded-md font-medium',
        className
      )}
    >
      {children}
    </button>
  );
};



export default SecondaryButton;
