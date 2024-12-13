import { AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Reveal from '../../util/Reveal';

const Contact = () => {
  return (
    <section className='section-wrapper' id='contact'>
      <div className='max-w-xl mx-auto bg-bgDark px-8 py-12 rounded-xl'>
        <Reveal width='w-full'>
          <h4 className='text-4xl text-textWhite md:text-5xl text-center font-black'>
            Contact<span className='text-primary'>.</span>
          </h4>
        </Reveal>
        <Reveal width='w-full'>
          <p className='text-center my-8 text-zinc-300 leading-relaxed'>
            Shoot me an email if you want to connect! You can also find me on{' '}
            <Link
              to='https://www.linkedin.com/in/karl-petter-n-560624137/'
              target='_blank'
              className='text-blue-400 hover:underline'
            >
              Linkedin
            </Link>{' '}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width='w-full'>
          <Link to='mailto:nordgaardkarlpetter@gmail.com'>
            <div className='flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto text-textWhite hover:text-primary transition-colors'>
              <AiFillMail />
              <span>nordgaardkarlpetter@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
