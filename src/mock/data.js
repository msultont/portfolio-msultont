import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Muhammad Sulton Tauhid - Fullstack software developer',
  lang: 'en',
  description:
    'Create functional application for desktop, website and mobile using latest technology to fulfill your business needs.',
  img: 'sulton.jpg',
  keywords:
    'software, developer, application, desktop, website, portfolio, mobile developer, it production, software developer, website developer, application developer, indonesian developer, application portfolio',
};

// HERO DATA
export const heroData = {
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  sulton: 'sulton.jpg',
  react: 'react.png',
  antd: 'antd.jpg',
  bootstrap: 'bootstrap.png',
  node: 'node.png',
  python: 'python.png',
  mongodb: 'mongodb.png',
  electron: 'electron.png',
  heroku: 'heroku.png',
  vercel: 'vercel.png',
  left: {
    title: 'Tech Stack',
  },
  right: {
    paragraph: `
      Hi! My fullname is Muhammad Sulton Tauhid. 
      I create a dynamic and functional application to fulfill the clients needs 
      with a little touch of design taste. 
      I love to hear music to boost my productivity.
      I open to discuss about technology stacks and the needs to build the apps.
    `,
  },
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
