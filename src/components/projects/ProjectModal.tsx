import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body!.style.overflowY = 'hidden';
    } else {
      body!.style.overflowY = 'scroll';
    }
  }, [isOpen]);

  const content = (
    <div
      className='fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer'
      onClick={() => setIsOpen(false)}
    >
      <button className='absolute top-4 md:top-6 text-2xl right-4 text-textWhite'>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className='w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-bgDark shadow-lg cursor-auto'
      >
        <img
          className='w-full'
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className='p-8'>
          <h4 className='text-3xl font-bold mb-2 text-textWhite'>{title}</h4>
          <div className='flex flex-wrap gap-2 text-sm text-primaryLight'>
            {tech.join(' - ')}
          </div>

          <div className='space-y-4 my-6 leading-relaxed text-sm text-textGray'>
            {modalContent}
          </div>

          <div>
            <p className='font-bold mb-2 text-xl text-textWhite'>
              Project Links<span className='text-primary'>.</span>
            </p>
            <div className='flex items-center gap-4 text-sm'>
              <Link
                target='_blank'
                rel='nofollow'
                className='text-textGray hover:text-primaryLight transition-colors flex items-center gap-1'
                to={code}
              >
                <AiFillGithub /> Source Code
              </Link>
              <Link
                target='_blank'
                rel='nofollow'
                className='text-textGray hover:text-primaryLight transition-colors flex items-center gap-1'
                to={projectLink}
              >
                <AiOutlineExport /> Live Demo
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen || !document.getElementById('root')) return null;

  return ReactDOM.createPortal(content, document.getElementById('root')!);
};

export default ProjectModal;