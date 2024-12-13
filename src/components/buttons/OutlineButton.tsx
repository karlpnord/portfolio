import { ReactNode } from 'react';

interface Props {
  handler: () => void;
  children: ReactNode;
}

const OutlineButton = ({ handler, children }: Props) => {
  return (
    <button onClick={handler} className='text-textWhite border border-primary px-4 py-2 rounded-md font-medium hover:bg-primary hover:text-primaryContent transition-colors'>
      {children}
    </button>
  );
};

export default OutlineButton;
