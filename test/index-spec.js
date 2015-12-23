var chai = require('chai'),
  assert = chai.assert

describe('my webdriverio tests', function () {

  it('Github test', function (done) {
    browser
      .url('https://github.com/')
      .getElementSize('.header-logo-wordmark', function (err, result) {
        assert.equal(undefined, err)
        assert.strictEqual(result.height , 26)
        assert.strictEqual(result.width, 89)
      })
      .getTitle(function (err, title) {
        assert.equal(undefined, err)
        assert.strictEqual(title, 'GitHub · Where software is built')
      })
      .getCssProperty('a[href="/plans"]', 'color', function (err, result) {
        assert.equal(undefined, err)
        assert.strictEqual(result.value, 'rgba(64,120,192,1)')
      })
      .call(done)
  })

  it('should do', function () {
    expect(true).to.equal(false)
  })
})
