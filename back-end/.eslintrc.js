module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "prettier"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/prefer-interface": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "arrow-body-style": 0,
    "no-console": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-nested-ternary": 0,
    "class-methods-use-this": 0,
    "object-curly-newline": 0,
    "react/prop-types": 0,
    "jsx-a11y/html-has-lang": 0,
    "prefer-const": 0,
    "react/button-has-type": 0
  }
};
