// @ts-check

/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@/.*$',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
}
