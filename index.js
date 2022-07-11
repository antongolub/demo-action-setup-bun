import _ from 'lodash'

console.log(_.camelCase('--foo-bar'))

try {
  require('@antongolub/iso8601')
  console.log('@antongolub/iso8601 is loaded')
} catch (e) {
  console.log('can not load dev dependency @antongolub/iso8601')
}
