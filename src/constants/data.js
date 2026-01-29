import { v4 as uuidv4 } from 'uuid';
export const STUDY_MODE = 'study-mode';
export const CARDS_MODE = 'cards-mode';
export const MAX_PROGRESS_FOR_CARD = 5;

export const areas = [
  'Art',
  'CSS',
  'Geography',
  'History',
  'HTML',
  'JavaScript',
  'Literature',
  'Mathematics',
  'Programming Concepts',
  'Science',
  'Web Development',
];

export const cards = [
  {
    question: 'What does HTML stand for?',
    answer: 'HyperText Markup Language',
    area: 'Web Development',
    progress: 0,
    id: uuidv4(),
  },
  {
    question: `What is the difference between 'let' and 'const' in JavaScript?`,
    answer: `'let' allows you to reassign the variable, while 'const' creates a constant reference that cannot be reassigned. Both are block-scoped.`,
    area: 'JavaScript',
    progress: 2,
    id: uuidv4(),
  },
  {
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheets',
    area: 'Web Development',
    progress: 0,
    id: uuidv4(),
  },
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
    area: 'Geography',
    progress: 5,
    id: uuidv4(),
  },
  {
    question: 'What is a closure in JavaScript?',
    answer:
      'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.',
    area: 'JavaScript',
    progress: 1,
    id: uuidv4(),
  },
  {
    question: 'What does DOM stand for?',
    answer: 'Document Object Model',
    area: 'Web Development',
    progress: 3,
    id: uuidv4(),
  },
  {
    question: 'What does DOM stand for?',
    answer: 'Document Object Model',
    area: 'Web Development',
    progress: 3,
    id: uuidv4(),
  },
  {
    question: 'What is the Pythagorean theorem?',
    answer: 'In a right triangle, a² + b² = c², where c is the hypotenuse',
    area: 'Mathematics',
    progress: 5,
    id: uuidv4(),
  },

  {
    question: `What is the difference between ' == ' and ' === ' in JavaScript?`,
    answer: `'==' checks for value equality with type coercion, while '===' checks for both value and type equality (strict equality).`,
    area: 'JavaScript',
    progress: 4,
    id: uuidv4(),
  },
  {
    question: 'What is Flexbox used for in CSS?',
    answer:
      'Flexbox is a CSS layout model that helps distribute space and align items in a container, making it easier to create responsive layouts.',
    area: 'CSS',
    progress: 0,
    id: uuidv4(),
  },
  {
    question: `Who wrote 'Romeo and Juliet'?`,
    answer: 'William Shakespeare',
    area: 'Literature',
    progress: 5,
    id: uuidv4(),
  },
  {
    question: `What is the purpose of the 'async' keyword in JavaScript?`,
    answer: `The 'async' keyword declares an asynchronous function that returns a Promise and allows the use of 'await' inside it.`,
    area: 'JavaScript',
    progress: 2,
    id: uuidv4(),
  },
];
