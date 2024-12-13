import SecondaryButton from '../buttons/SecondaryButton';
import Reveal from '../../util/Reveal';

const Hero = () => {
  return (
    <section className='text-slat-100 overflow-hidden py-24 md:py-32'>
      <div className='relative'>
        <div className='pointer-events-none relative z-10'>
          <Reveal>
            <h1 className='pointer-events-auto text-4xl sm:text-6xl font-black text-textWhite md:text-8xl'>
              Hi, I'm Karl<span className='text-primary'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className='pointer-events-auto my-2 text-xl sm:text-2xl text-textGray md:my-4 md:text-4xl'>
              I'm a{' '}
              <span className='font-semibold text-primary'>
                Front End Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-textGray md:text-base'>
              I've spent the last 2 years studying front-end development at Noroff, building a strong foundation in creating dynamic and user-friendly web experiences.
              Now, I'm eager to take the next step by joining a team where I can grow my skills, collaborate with talented professionals, and make an impact through innovative projects.
            </p>
          </Reveal>
          <Reveal>
            <SecondaryButton
              clickHandler={() => {console.log('Redirect to contact section');}}
              className={'pointer-events-auto mt-4 md:mt-6'}
            >
              Contact Me
            </SecondaryButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
