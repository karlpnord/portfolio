import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SideNavLink from './SideNavLink';

const SideNav = () => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className='scrollbar-none bg-bgDarkest h-screen sticky top-0 left-0 z-20 flex flex-col items-center'
    >
      <span className='shrink-0 text-xl font-bold text-textWhite leading-[1] size-10 flex items-center justify-center my-4'>
        K<span className='text-primary'>.</span>
      </span>
      <SideNavLink
        selected={selected}
        setSelected={setSelected}
        value='#about'
        href='#about'
      >
        About
      </SideNavLink>
      <SideNavLink
        selected={selected}
        setSelected={setSelected}
        value='#projects'
        href='#projects'
      >
        Projects
      </SideNavLink>
      <SideNavLink
        selected={selected}
        setSelected={setSelected}
        value='#contact'
        href='#contact'
      >
        Contact
      </SideNavLink>
    </motion.nav>
  );
};

export default SideNav;