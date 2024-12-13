const Chip = ({ children }: { children: string }) => {
  return (
    <span className='text-xs text-textWhite px-2 py-1 rounded bg-bgDark'>{children}</span>
  );
};

export default Chip;
