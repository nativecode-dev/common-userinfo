const expect = require('chai').expect
const mocha = require('mocha')

describe('when using userinfo', () => {
  it('should get userinfo', () => {
    const userinfo = require('../lib')
    expect(userinfo).to.not.be.null
    expect(userinfo).to.not.be.undefined
  })
})
