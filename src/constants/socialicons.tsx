import {
  SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter,
} from 'react-icons/sl';

import { SiMedium } from 'react-icons/si';

export const socialIcons = [
  {
    label: 'Facebook',
    element: <SlSocialFacebook />,
    path: 'https://www.facebook.com/Probe.NITT/',
    bgColor: '#3b5998',
    angle: 'rotate(0deg) translate(30px,0px)',
  },
  {
    label: 'LinkedIn',
    element: <SlSocialLinkedin />,
    path: 'https://www.linkedin.com/company/probe-nit-trichy/mycompany/',
    bgColor: '#0077b5',
    angle: 'rotate(0deg) translate(70px,45px)',

  },
  {
    label: 'Instagram',
    element: <SlSocialInstagram />,
    path: 'https://www.instagram.com/probe.nitt/',
    bgColor:
            'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    angle: 'rotate(0deg) translate(-70px,45px)',
  },
  {
    label: 'Twitter',
    element: <SlSocialTwitter />,
    path: 'https://twitter.com/probe_nitt?lang=en',
    bgColor: '#00acee',
    angle: 'rotate(0deg) translate(-30px,0px)',
  },
  {
    label: 'Medium',
    element: <SiMedium />,
    path: 'https://medium.com/probe-nit-trichy',
    bgColor: '#f4bc00',
    angle: 'rotate(0deg) translate(-30px,0px)',
  },
];
