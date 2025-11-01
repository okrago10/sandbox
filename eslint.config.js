import nextPlugin from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: nextPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
