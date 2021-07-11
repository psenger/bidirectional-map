const BiDirectionalMap = require('./index');

describe('BiDirectionalMap',()=>{
    test('#constructor',()=>{
        const bidiMap =  new BiDirectionalMap([['bob', 'larry'],['tim', 'tom']]);
        expect(bidiMap).toMatchSnapshot();
    });
    test('#set',()=>{
       const bidiMap =  new BiDirectionalMap();
        bidiMap.set('bob', 'larry').set('tim', 'tom')
        expect(bidiMap).toMatchSnapshot();
    })
  test('#set with override',()=>{
    const bidiMap =  new BiDirectionalMap();
    bidiMap.set('bob', 'larry').set('bob', 'kim')
    expect(bidiMap).toMatchSnapshot();
  })
})
