import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sulton | Personal Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    "Sulton's Personal web portfolio. It includes who Sulton is as a person, his personal projects that has been finished and how to contact him via email. This web portfolio is all about him.", // e.g: Welcome to my website
  img: 'sulton-pic.jpg',
};

// HERO DATA
export const heroData = {
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'my-photo.jpeg',
  paragraphOne:
    'My fullname is Muhammad Sulton Tauhid. Currently, I am at the final year of my undergraduate study at University of Indonesia majoring Computer Engineering.',
  paragraphTwo:
    'My motto of life is an endless learner. My goal is to become a CTO, an entrepreneur and being beneficial to human being and Islam.',
  paragraphThree:
    'I like to discuss about current technology trend and entrepreneur. I am type of guy that flexible depends on the person I talk with but tend to be stiff in socializing.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sea-port-maps.jpeg',
    title: 'Sea Port Maps',
    info:
      'I developed java-based desktop application to calculate best sea-port route using Dijkstra Algorithm, fitness-function and SWT Map API to display the route map',
    info2: '',
    url: '',
    repo: 'https://github.com/msulton55/sea_port_voyage_project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'admin-titippaket-table.png',
    title: 'Admin Dashboard',
    info:
      'TitipPaket is an expedition courier app which cooperate with driver to send logistics. My project was developing the admin dashboard focus on table system and filter system.',
    info2: '',
    url: 'https://admin-titippaket.vercel.app',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Collaborate for project together? Mail me!',
  btn: 'Mail me',
  email: 'msulton55@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/msultont/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/msultont/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/msulton55',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
