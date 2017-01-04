const nconf = require('nconf');
const config = module.exports = nconf.argv()

.env([
  'APP_SECRET'
])

.defaults({
  'HTTPS': (process.env.NODE_ENV === 'production')
})
