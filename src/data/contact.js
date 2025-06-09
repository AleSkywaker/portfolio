import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/aleskywaker',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/sandrocolombo/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://medium.com/@uricaine',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://dev.to/',
    label: 'Dev',
    icon: faDev,
  },
  {
    link: 'https://www.reddit.com/r/homeassistant/comments/1kaswo1/turned_an_old_kobo_ereader_into_an_ha_dashboard/?rdt=45787',
    label: 'Reddit',
    icon: faRedditAlien,
  },
  {
    link: 'mailto:alexsandrocolombo@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
