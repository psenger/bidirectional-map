const BiDirectionalMap = require('./index')

describe('BiDirectionalMap', () => {
  test('#constructor', () => {
    const bidiMap = new BiDirectionalMap([['bob', 'larry'], ['tim', 'tom']])
    expect(bidiMap).toMatchSnapshot()
  })
  test('#set with string', () => {
    const bidiMap = new BiDirectionalMap()
    bidiMap.set('bob', 'larry').set('tim', 'tom')
    expect(bidiMap).toMatchSnapshot()
  })
  test('#set with string - override', () => {
    const bidiMap = new BiDirectionalMap()
    bidiMap.set('bob', 'larry').set('bob', 'kim')
    expect(bidiMap).toMatchSnapshot()
  })
  test('#set with number', () => {
    const bidiMap = new BiDirectionalMap()
    bidiMap.set(1, 2).set(3, 4)
    expect(bidiMap).toMatchSnapshot()
  })
  test('#set with number - override', () => {
    const bidiMap = new BiDirectionalMap()
    bidiMap.set(1, 2).set(1, 3)
    expect(bidiMap).toMatchSnapshot()
  })
})
