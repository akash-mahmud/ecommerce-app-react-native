module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      
  "prettier/prettier": 0,
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        
      },
    },
  ],
};
