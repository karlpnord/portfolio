import Chip from '../../util/Chip';
import Reveal from '../../util/Reveal';
import { AiFillCode } from 'react-icons/ai';

const Stats = () => {
  return (
    <div className='relative'>
      <Reveal>
        <div>
          <h4 className='flex items-center mb-6'>
            <AiFillCode className='text-primary text-2xl' />
            <span className='font-bold ml-2 text-textWhite'>Skills</span>
          </h4>
          <div className='flex flex-wrap gap-2 mb-12'>
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>NodeJS</Chip>
            <Chip>GitHub</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Bootstrap</Chip>
            <Chip>React Query</Chip>
            <Chip>Zustand</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>Figma</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Stats;
