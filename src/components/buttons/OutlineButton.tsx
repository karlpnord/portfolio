import { ReactNode } from 'react';

interface Props {
  handler: () => void;
  children: ReactNode;
}

const OutlineButton = ({ handler, children }: Props) => {
  return (
    <button onClick={handler} className='text-gray-200 border border-gray-200 px-4 py-2 rounded-md font-medium hover:bg-gray-200 hover:text-zinc-900 transition-colors'>
      {children}
    </button>
  );
};

export default OutlineButton;
