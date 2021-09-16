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
    info: 'A Java based desktop application to calculate best sea-port route using dijkstra algorithm and fitness function',
    projectDate: 'March 2020 - May 2020',
    projectTech: [
      {
        alt: 'java',
        techUrl: 'https://docs.oracle.com/javase/tutorial/uiswing/',
        filename: 'java.png',
      },
      {
        alt: 'google maps API',
        techUrl: 'https://developers.google.com/maps',
        filename: 'google-maps.png',
      },
    ],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ['SDTR-1.png', 'SDTR-2.png', 'SDTR-3.png'],
    title: 'AJB Document Entity Recognition',
    info: 'A React based website application integrated with machine learning model to recognize entity of AJB document using Python and utilize Google Vision API to extract text of AJB document',
    projectDate: 'February 2021 - June 2021',
    projectTech: [
      {
        alt: 'reactJS',
        techUrl: 'https://reactjs.org/',
        filename: 'react.png',
      },
      {
        alt: 'nodeJS',
        techUrl: 'https://nodejs.org/en/',
        filename: 'node.png',
      },
      {
        alt: 'python',
        techUrl: 'https://www.python.org/',
        filename: 'python.png',
      },
      {
        alt: 'google cloud vision api',
        techUrl: 'https://cloud.google.com/vision/docs/ocr',
        filename: 'google-cloud.png',
      },
    ],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: [
      'seighneur-1.png',
      'seighneur-2.png',
      'seighneur-3.png',
      'seighneur-4.png',
      'seighneur-5.png',
      'seighneur-6.png',
      'seighneur-7.png',
      'seighneur-8.png',
      'seighneur-9.png',
    ],
    title: 'Seighneur Application',
    info: 'Seighneur is an electron-desktop-based application built on website technology using React. This application is used to facilitate the inventory process of land assets',
    projectDate: 'February 2021 - June 2021',
    projectTech: [
      {
        alt: 'reactJS',
        techUrl: 'https://reactjs.org/',
        filename: 'react.png',
      },
      {
        alt: 'electronJS',
        techUrl: 'https://www.electronjs.org/',
        filename: 'electron.png',
      },
      {
        alt: 'nodeJS',
        techUrl: 'https://nodejs.org/en/',
        filename: 'node.png',
      },
      {
        alt: 'mongodb',
        techUrl: 'https://www.mongodb.com/',
        filename: 'mongodb.png',
      },
    ],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you have anything in your mind, just mail me!',
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
      url: 'https://github.com/msultont',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:msulton55@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
