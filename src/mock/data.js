import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rob Gleeson | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hi! Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey I'm",
  name: 'Rob',
  subtitle: "I'm a Software Developer!",
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'rob-profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'aangine.jpg',
    title: 'Aangine',
    info:
      'Empowered by algorithms, your roadmap instantly incorporates all changes of capacity, budgets, new projects and ideas',
    info2: 'Continuous Software Ltd - Dublin, Ireland',
    info3: 'Technologies Used: React/Redux - Webpack - ES Lint - Highcharts.js - AG Grid - Gitlab',
    url: 'https://www.aangine.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iph.jpg',
    title: 'International Performance Hub (IPH)',
    info:
      'A comprehensive platform for users to access and engage on global performance indicators',
    info2: 'Continuous Software Ltd - Dublin, Ireland',
    info3: 'Technologies Used: React/Redux - D3.js - Node.js',
    url: 'http://www.iph.sa',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dellemc.jpg',
    title: 'Confidential',
    info: 'A bespoke web application which consumes high quantities of Big Data.',
    info2: 'DellEMC - Riyadh, Saudi Arabia',
    info3: 'Technologies Used: React/Redux - Webpack - Material UI - Gitlab',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'digxcel.jpg',
    title: 'digXcel',
    info: 'Automated solution for GDPR personal data management',
    info2: 'Software Design Ltd - Dublin, Ireland',
    info3: 'Technologies Used: React/Redux - Node.js - RabbitMQ - Gitlab',
    url: 'https://digxcel.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// PERSONAL PROJECTS DATA
export const personalProjectsData = [
  {
    id: nanoid(),
    img: 'port-cce.png',
    title: 'Portarlington CCÉ',
    info: 'Web application built for Portarlington CCÉ, a branch of Comhaltas Ceoltóirí Éireann.',
    info2: 'Co. Offaly, Ireland',
    info3: 'Technologies Used: React.js, Gatsby, Netlify CMS',
    url: 'https://portarlingtoncce.ie/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ewfh.jpg',
    title: 'E-Working Ireland - Tax Relief Calculator',
    info:
      'Android application used to track and calculate tax relief available for those who work from home',
    info2: 'Co. Offaly, Ireland',
    info3: 'Technologies Used: React Native - Expo - GitHub',
    url: 'https://play.google.com/store/apps/details?id=com.eworkfromhome.eworkfromhome',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hup.jpg',
    title: 'Hup!',
    info: 'Find a traditional Irish music session near you!',
    info2: 'Co. Offaly, Ireland',
    info3: 'Technologies Used: React Native - Expo - GitHub',
    url: 'https://play.google.com/store/apps/details?id=com.hup.hup',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'repo.jpg',
    title: 'Open Repo',
    info: 'Command line tool for opening GitHub/Gitlab repositories from the command line',
    info2: 'Co. Offaly, Ireland',
    info3: 'Technologies Used: Node.js - Github',
    url: 'https://www.npmjs.com/package/open-repo',
    repo: 'https://github.com/robbiegleeson/repo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'robbie.gleeson@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/robbiegleeson',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gleesonrob/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.linkedin.com/in/gleesonrob/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
