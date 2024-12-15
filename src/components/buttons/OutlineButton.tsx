import { ReactNode } from 'react';

interface Props {
  handler: () => void;
  children: ReactNode;
}

const OutlineButton = ({ handler, children }: Props) => {
  return (
    <button
      onClick={handler}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        border-primary px-4 py-2 font-semibold
        text-textWhite transition-all duration-500

        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-primary
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:text-primaryContent
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
