const logotext = 'USMAN'
const meta = {
  title: 'Usman Haider',
  description:
    'I’m Usman Haider Cybersecurity Engineer _ Fresh graduate, currently open to Work'
}

const introdata = {
  title: 'I’m Usman Haider',
  animated: {
    first: 'Cybersecurity Engineer',
    second: 'Ethical Hacker',
    third: 'Researcher'
  },
  description:
    'Protecting against cyber threats through strategic risk management, innovative solutions, and proactive defense strategies.',
  your_img_url: 'https://images.unsplash.com/photo-1514790193030-c89d266d5a9d'
}

const dataabout = {
  title: 'Professional Summary',
  aboutme:
    'I am a quick learner and a good problem solver. I believe that nothing is impossible. That’s why I like to groom my technical, research and interpersonal abilities by working in a professional and challenging environment that realizes my complete potential.'
}
const worktimeline = [
  {
    jobtitle: 'Internee',
    where: 'Supernet Limited',
    date: '2022'
  },
  {
    jobtitle: 'Internee',
    where: 'PTCL',
    date: '2022'
  },
  {
    jobtitle: 'Teacher Assistant',
    where: 'FAST NUCES',
    date: '2020-21'
  }
]

const skills = [
  {
    name: 'Python',
    value: 90
  },
  {
    name: 'Djano',
    value: 85
  },
  {
    name: 'Javascript',
    value: 80
  },
  {
    name: 'React',
    value: 60
  },
  {
    name: 'Jquery',
    value: 85
  }
]

const services = [
  {
    title: 'UI & UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.'
  },
  {
    title: 'Mobile Apps',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.'
  },
  {
    title: 'Wordpress Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.'
  }
]

const dataportfolio = [
  {
    img: 'https://picsum.photos/400/?grayscale',
    description: 'Work History',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/800/?grayscale',
    description: 'Research & Publications',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/?grayscale',
    description: 'Professional Certifications',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/600/?grayscale',
    description: '',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/300/?grayscale',
    description: 'Awards & Achievements',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/700/?grayscale',
    description: 'Extra Course Work',
    link: '#'
  },

  {
    img: 'https://picsum.photos/400/600/?grayscale',
    description: 'empty',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/300/?grayscale',
    description: '1',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/?grayscale',
    description: 'Volunteering',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/550/?grayscale',
    description: 'Seminars & Talks',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/?grayscale',
    description: '2',
    link: '#'
  },
  {
    img: 'https://picsum.photos/400/700/?grayscale',
    description: '3',
    link: '#'
  }
]

const contactConfig = {
  YOUR_EMAIL: 'usmanhaider@ieee.org',
  YOUR_FONE: '(+92)315-6842063',
  description:
    "Get in touch! Whether you have questions, feedback, or a potential collaboration opportunity, I'm always happy to hear from you.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
  YOUR_TEMPLATE_ID: import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
  YOUR_USER_ID: import.meta.env.VITE_APP_EMAIL_ACCOUNT_ID
}

const socialprofils = {
  github: 'https://github.com/usmanhaider4772',
  facebook: 'https://facebook.com/usman.hayder.94/',
  linkedin: 'https://linkedin.com/in/usmanhaider4772/',
  researchgate: 'https://www.researchgate.net/profile/Usman-Haider-22'
}
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext
}
