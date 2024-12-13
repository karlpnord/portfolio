import { AiOutlineArrowRight } from 'react-icons/ai';
import SectionHeader from '../../util/SectionHeading';
import Reveal from '../../util/Reveal';
import MyLinks from '../../util/MyLinks';
import Stats from './Stats';

const About = () => {
  return (
    <section id='about' className='section-wrapper'>
      <SectionHeader title='About' dir='l' />
      <div className='grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8'>
        <div className='space-y-4'>
          <Reveal>
            <p className='leading-relaxed text-textGray'>
              <span className='bg-secondary text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl'>
                H
              </span>
              ey! I&apos;m Karl, a 25-year old front-end developer. Over the past two years, I have honed my skills at Noroff, where I dove deep into web development. My passion for creating engaging, user-friendly websites has driven me to continually learn and grow in this field.
            </p>
          </Reveal>
          <Reveal>
            <p className='leading-relaxed text-textGray'>
            When I&apos;m not coding, you can usually find me pursuing my other passions. I&apos;m an avid gamer who enjoys exploring new worlds and challenging myself with various titles. I also have a strong interest in sports and fitness, and I make time for regular workouts to stay active and healthy.
            </p>
          </Reveal>
          <Reveal>
            <p className='leading-relaxed text-textGray'>
            Right now, I&apos;m actively seeking a position as a front-end developer. I&apos;m eager to further expand my skills and knowledge while working with talented professionals in a collaborative environment. I believe that working with a strong team will help me continue to grow and improve as a developer.
            </p>
          </Reveal>
          <Reveal>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-4 text-sm text-primaryLight'>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default About;
