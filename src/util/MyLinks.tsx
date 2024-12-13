import { SiLinkedin, SiGithub, SiX, SiCodepen } from 'react-icons/si';
import { Link } from 'react-router-dom';

const MyLinks = () => (
  <div className='flex items-center text-lg gap-4'>
    <Link
      className='text-zinc-300 hover:text-primary transition-colors'
      to='https://www.linkedin.com/in/karl-petter-n-560624137/'
      target='_blank'
      rel='nofollow'
    >
      <SiLinkedin />
    </Link>
    <Link
      className='text-zinc-300 hover:text-primary transition-colors'
      to='https://github.com/karlpnord'
      target='_blank'
      rel='nofollow'
    >
      <SiGithub />
    </Link>
    <Link
      className='text-zinc-300 hover:text-primary transition-colors'
      to='https://www.x.com'
      target='_blank'
      rel='nofollow'
    >
      <SiX />
    </Link>
    <Link
      className='text-zinc-300 hover:text-primary transition-colors'
      to='https://www.codepen.io'
      target='_blank'
      rel='nofollow'
    >
      <SiCodepen />
    </Link>
  </div>
);

export default MyLinks;