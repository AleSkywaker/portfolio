const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Languages', 'Javascript'],
  },
  {
    title: 'HTML',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'SASS/SCSS/CSS',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Node',
    competency: 5,
    category: ['Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Javascript', 'Frameworks'],
  },
  {
    title: 'LitElement',
    competency: 5,
    category: ['Javascript', 'Frameworks'],
  },
  {
    title: 'Angular',
    competency: 4,
    category: ['Javascript', 'Frameworks'],
  },
  {
    title: 'Web Components',
    competency: 4,
    category: ['Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Azure',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Express',
    competency: 4,
    category: ['Javascript'],
  },
  {
    title: 'D3',
    competency: 4,
    category: ['Javascript'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Frameworks'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Frameworks'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#1F91DC',
  '#FFA500',
  '#22AB74',
  '#515dd4',
  '#c92626',
  '#f2e054',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
