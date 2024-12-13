import Reveal from './Reveal';

interface Props {
  title: string;
  dir?: 'l' | 'r';
}

const SectionHeader = ({ title, dir = 'r' }: Props) => {
  return (
    <div
      className='flex items-center gap-8 mb-12'
      style={{ flexDirection: dir === 'r' ? 'row' : 'row-reverse' }}
    >
      <div className='w-full h-[1px] bg-textGrayDark' />
      <h2>
        <Reveal>
          <span className='text-textWhite text-3xl md:text-5xl font-black text-end'>
            {title}
            <span className='text-primary'>.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};

export default SectionHeader;
