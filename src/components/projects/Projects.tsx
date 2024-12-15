import SectionHeader from '../../util/SectionHeading';
import Project from './Project';

const Projects = () => {
  return (
    <section className='section-wrapper' id='projects'>
      <SectionHeader title='Projects' dir='r' />

      <div className='grid gap-12 grid-cols-1 md:grid-cols-2'>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: 'Holidaze',
    imgSrc: 'project-imgs/holidaze.jpg',
    code: 'https://github.com/karlpnord/project-exam-2',
    projectLink: 'https://holidaze-karlpnord.netlify.app/',
    tech: ['React', 'TypeScript', 'Tailwind', 'React Query', 'Framer Motion'],
    description:
      'An Airbnb-inspired app for seamless venue management and bookings, featuring modern technologies and a user-friendly interface for travelers and hosts.',
    modalContent: (
      <>
        <p>
          Welcome to Holidaze, the final project of my Front-End Development studies at Noroff. This Airbnb-inspired app simplifies venue management and booking for both travelers and hosts.
        </p>
        <p>
          Users can easily browse, search, and book venues, while hosts can manage their listings and reservations with ease. The platform features user registration and authentication, enabling personalized experiences for both guests and venue managers.
        </p>
        <p>
          Built with modern front-end technologies, Holidaze uses React for the user interface, Tailwind CSS for responsive styling, and React-Router-dom for seamless navigation. It also integrates TanStack React Query for efficient data fetching and caching, while Framer Motion adds smooth animations.
        </p>
        <p>
          The project was developed with a focus on user experience, offering a clean and intuitive interface for both mobile and desktop devices.
        </p>
      </>
    ),
  },
  {
    title: 'E-Commerce Store',
    imgSrc: 'project-imgs/e-commerce.jpg',
    code: 'https://github.com/karlpnord/js-frameworks-ca',
    projectLink: 'https://tranquil-parfait-3be61a.netlify.app/',
    tech: ['React', 'JavaScript', 'Tailwind', 'React Context'],
    description:
      'A fully functional shopping platform with cart management, API integration, responsive design, and dark/light modes, built with React and Tailwind CSS.',
    modalContent: (
      <>
        <p>
          This e-commerce store is a project from my Front-End Development studies at Noroff, where I applied my knowledge of React to build a fully functional shopping platform.
        </p>
        <p>
          The app allows users to browse and search for products, manage a shopping cart, and complete the purchase process seamlessly.
        </p>
        <p>
          Key features include adding/removing items, adjusting quantities, viewing total prices, and confirming actions through modals.
        </p>
        <p>
          I focused on implementing React concepts such as component-based architecture, state management with useState and useReducer, and context management using useContext.
        </p>
        <p>
          The application integrates with an API to fetch product data and supports responsive design for mobile, tablet, and desktop views.
        </p>
        <p>
          I also included dark and light modes, enhancing the user experience with a customizable interface.
        </p>
        <p>
          Technologies like React, React-Router-dom, and Tailwind CSS were used to build a smooth, modern shopping experience.
        </p>
      </>
    ),
  },
  {
    title: 'Auction House',
    imgSrc: 'project-imgs/auctionhouse.jpg',
    code: 'https://github.com/karlpnord/semester-project-2',
    projectLink: 'https://magical-churros-99ce65.netlify.app/',
    tech: ['JavaScript', 'HTML', 'Bootstrap'],
    description:
      'An interactive auction platform focusing on API integration and authentication, styled with customized Bootstrap and SASS for a responsive design.',
    modalContent: (
      <>
        <p>
          This auction house application is a training project for my Semester Project 2 during my Front-End Development studies at Noroff.
        </p>
        <p>
          The main goal was to work with APIs using JavaScript, while applying the front-end technologies I learned over the past 1.5 years, including HTML, CSS, and JS.
        </p>
        <p>
          The app allows users to register and log in, with authentication required for certain features like creating and removing an auction listing.
        </p>
        <p>
          I used Bootstrap for responsive design, customizing it with SASS to tailor the appearance to the project&apos;s needs.
        </p>
        <p>
          The application enables users to browse auction items, place bids, and track ongoing auctions, offering an interactive experience.
        </p>
        <p>
          This project helped me deepen my understanding of API integration and provided hands-on experience with authentication in a real-world application.
        </p>
      </>
    ),
  },
];

export default Projects;