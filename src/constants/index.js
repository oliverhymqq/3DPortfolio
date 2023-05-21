import {
  mobile,
  backend,
  bootstrap,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  reactrouter,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  hp,
  huawei,
  ozmas,
  GO,
  udemy,
  unsplash,
  hmostore,
  cocktailapp,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Front End Developer-React',
    icon: mobile,
  },
  {
    title: 'Warehouse Operation Specialist',
    icon: backend,
  },
  {
    title: 'Inventory Management Master',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'react router',
    icon: reactrouter,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
]

const experiences = [
  {
    title: 'Software Test Engineer Intern',
    company_name: 'Hewlett-Packard',
    icon: hp,
    iconBg: '#383E56',
    date: 'Jul 2011 - May 2012',
    points: [
      'Implement initial test with supervision from mentor .',
      'Participating in testing case design.',
      'Implementing responsive test and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Radio Frequency Optimization Engineer',
    company_name: 'Huawei',
    icon: huawei,
    iconBg: '#E6DEDD',
    date: 'Jul 2012 - Dec 2016',
    points: [
      '2G/3G/4G Network Planning and Optimization,Radio Site parameter planning',
      'GSM & UMTS network Wireless technical problems trouble-shooting and performance optimization',
      'Orange S.A (France Telecom) 2G/3G Swap & Network Integration',
      'Vodafone 3G/4G networking upgrading&integration.',
    ],
  },
  {
    title: 'Warehouse Manager',
    company_name: 'OZMAS',
    icon: ozmas,
    iconBg: '#f4f4f5',
    date: 'Aug 2017 - Jun 2022',
    points: [
      'Develop warehouse SOP to standardize the daily tasks,responsible for daily warehouse operation with high accuracy and fast-pace ',
      'Adhere to WHS and HACCP, Safety always in highest priority',
      'Effectively control stock discrepancy and dispatching accuracy to improve customer experience and company reputation',
      'Cooperate with sales team to expand company annual operation turnover from $3,000,000 to $5,500,000',
    ],
  },
  {
    title: 'Inventory Supervisor',
    company_name: 'Glass Outlet',
    icon: GO,
    iconBg: '#E6DEDD',
    date: 'Jun 2022 - Present',
    points: [
      'Co-ordination and execution of stock movements into overflow areas/locations while considering stock rotation.',
      'Co-ordinate stock cycle counts with a view to ensuring stock integrity and early identification of any deficiencies in picking/systems.',
      'Suggesting operational charges for continual improvements for warehouse inventory functions to ensure the highest standards are achieved.',
      'Maintain warehouse code picking labels (stock updates or re-application) and compliant with all WHS responsibilities',
    ],
  },

  {
    title: 'Front end developer',
    company_name: 'Self-taught&Self-employee',
    icon: udemy,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Present',
    points: [
      'Design products according customer requirement and my technology capacity.',
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code products reviews and providing constructive feedback to customer.',
    ],
  },
]

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ]

const projects = [
  {
    name: 'Cocktail App',
    description:
      'Web-based platform that allows users to search and display cocktail recipe from cocktailDB API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },

      {
        name: 'reactrouter',
        color: 'pink-text-gradient',
      },
    ],
    image: cocktailapp,
    source_code_link: 'https://github.com/oliverhymqq/React-CocktailDB',
    show_link: 'https://hmo-cocktailapp.netlify.app/',
  },
  {
    name: 'e-commerce HMOStore',
    description:
      'e-commerce website that enables users to search,view shop for furniture online,includes cart, payment function',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactrouter',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: hmostore,
    source_code_link: 'https://github.com/oliverhymqq/React-HMOStore',
    show_link: 'https://hmostore-bne.netlify.app/',
  },
  {
    name: 'unsplash clone',
    description:
      'A clone project from unsplash, which enable users to search picture via website',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'fetchAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: unsplash,
    source_code_link: 'https://github.com/oliverhymqq/React-Unsplash-images',
    show_link: 'https://hmo-unsplash.netlify.app/',
  },
]

export { services, technologies, experiences, projects }
