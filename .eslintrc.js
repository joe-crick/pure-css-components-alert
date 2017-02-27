module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true
  },

  "extends": ["eslint:recommended"],

  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
  },

  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0,
  },
};