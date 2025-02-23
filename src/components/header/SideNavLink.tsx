import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  href: string;
  children: string;
  value: string;
}

const SideNavLink = ({
  setSelected,
  selected,
  children,
  href,
  value,
}: Props) => {
  return (
    <motion.div
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='w-full'
    >
      <Link
        to={href}
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          setSelected(value);
        }}
        className={`[writing-mode:vertical-rl] h-24 shrink-0 flex items-center justify-center border-r-2 font-semibold text-sm text-textWhite transition-all w-full ${
          selected === value
            ? 'bg-bgDark border-primary opacity-100'
            : 'border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-bgDark'
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default SideNavLink;