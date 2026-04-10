module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  overrides: [
    {
      files: [
        'src/models/**/*.jsx',
        'src/components/OfficeScene.jsx',
        'src/pages/Home.jsx',
        'src/pages/Projects.jsx',
        'src/pages/Contact.jsx',
      ],
      rules: {
        'react/no-unknown-property': 'off',
      },
    },
    {
      files: ['src/models/**/*.jsx', 'src/components/OfficeScene.jsx'],
      rules: {
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
    {
      files: ['src/components/ProjectDetailTemplate.jsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
