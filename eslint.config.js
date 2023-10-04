import mist from './dist/index.js'

export default mist({
  vue: true,
  typescript: true,
  ignores: [
    'fixtures',
    '_fixtures',
  ],
})
