/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */

const { PUBLIC_URL } = process.env;

const work = [
  {
    name: 'Cognizant',
    icon: `${PUBLIC_URL}/images/companies_logos/cog.png`,
    position: 'Senior Front-End Developer',
    url: 'https://cognizant.com',
    startDate: '2021-03-01',
    summary: `As a Senior Front-End Developer at Cognizant, I have been contributing to large-scale projects, focusing on building scalable and maintainable UI architectures. My daily work involves a mix of modern and legacy technologies, including React, Angular, Web Components, Lit, Storybook, and various state management libraries, also Jasmine, Karma, Mocha for testing, etc...

    I work closely with cross-functional teams to deliver high-performance,
    accessible, and visually consistent user experiences.
    My role also includes reviewing code, and helping shape front-end
    best practices across projects.

    I have been involved in several high-impact projects,
    including the development of a tool for a financial services client.
   `,
    highlights: [
      'Agile methodologies, Jira for task tracking and collaboration.',
      'Git for version control.',
      'CI/CD pipelines for automated testing and deployment.',
    ],
  },
  {
    name: 'Telefonica',
    icon: `${PUBLIC_URL}/images/companies_logos/tel.png`,
    position: 'Full Stack Developer intern',
    url: 'https://telefonica.com',
    startDate: '2018-02-14',
    endDate: '2021-03-01',
    summary: `During my internship at Telefónica, I worked as a Full Stack Developer, contributing to a range of projects that required both front-end and back-end expertise. On the front end, I developed web applications using modern JavaScript frameworks such as React and Angular. On the back end, I primarily used Node.js, Express, and MongoDB to build APIs and data-driven functionalities.

    One of my key responsibilities was developing interactive dashboards
    and data visualization tools, helping teams manage and interpret
    complex data more efficiently. The experience gave me a solid foundation
    in full stack development and exposed me to real-world practices
    in software design, performance optimization, and collaborative development.`,
    highlights: [
      'During my three and a half years at Telefónica as part of the Data Team, I gained highly valuable experience in data management, Big Data, and Artificial Intelligence. I was actively involved in building tools for data analysis and visualization, focusing on transforming complex datasets into meaningful insights.',

      'These solutions enabled clients to better understand their data, make informed decisions, and ultimately gain a competitive edge in their industries through enhanced analytics and strategic clarity.',
    ],
  },
  {
    name: 'GFT Technologies',
    icon: `${PUBLIC_URL}/images/companies_logos/gft.png`,
    position: 'Senior Software Engineer',
    url: 'https://gft.com',
    startDate: '2017-06-04',
    endDate: '2018-02-10',
    summary: `As a Senior Software Engineer at GFT Technologies, I was responsible for developing complex software solutions for clients in the financial services sector. My role focused on designing and implementing scalable, high-performance applications, primarily using JavaScript and modern web technologies.

    I worked closely with cross-functional teams to gather requirements,
    design system architectures, and deliver high-quality software solutions.
    My work involved both front-end and back-end development,
    ensuring that applications were not only functional but also
    user-friendly and visually appealing.
    `,
    highlights: [
      'During my time at GFT Technologies, I worked extensively with libraries such as Angular, and also developed custom Web Components from scratch, ensuring modularity, reusability, and seamless integration across different projects.',
    ],
  },
];

export default work;
