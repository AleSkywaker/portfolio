// TODO Add a couple lines about each project

import Silk from '../components/Silk/Silk';
// import LetterGlitch from '../components/Glitch/Glitch';

const data = [
  {
    title: 'Libros Libres Member Card',
    subtitle: 'A card to help you borrow books from the library',
    link: 'https://libroslibrefront.onrender.com/',
    image: '/images/projects/libroslibres.jpg',
    date: '2022-08-20',
    desc:
      'A card to see if your subscription to the library is active. '
      + 'It also allows you to borrow books from the library. '
      + 'Also there is a biggest backend that allows the owner to manages subscriptions, '
      + 'books, and members.',
  },
  // {
  //   title: 'Code Inmersion',
  //   subtitle: 'Make weekends retire to build a whole project hackathon style',
  //   link: 'https://codeinmersion.com',
  //   image: '/images/projects/codeinmersion.jpg',
  //   component: LetterGlitch,
  //   date: '2020-01-01',
  //   desc:
  //     'Learn a lot in a weekend by building a project from scratch. '
  //     + 'The idea is to build a project in a weekend, so you can learn a lot in a short time. '
  //     + 'Apply real world practices like version control, testing, and deployment. '
  //     + 'The project is open source and you can contribute to it.',
  // },
  {
    title: 'Better Browser',
    subtitle: 'An AI powered browser extension to help you focus',
    link: 'https://abetterbrowser.com',
    image: '/images/projects/abetterbrowser.jpg',
    component: Silk,
    date: '2025-08-16',
    desc:
      'An AI powered browser extension that helps you focus on your work by '
      + 'blocking distractions and providing you with a better browsing experience.'
      + 'All information well organizated and easy to see',
  },
];

export default data;
