// @ts-check

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  semi: false,
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^react.*$',
    '<THIRD_PARTY_MODULES>',
    '^(?!.*[.]css$)[./].*$',
    '[.]css$',
  ],
  tailwindStylesheet: './src/index.css',
}
