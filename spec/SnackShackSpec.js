'use strict';
const SnackShack = require('../lib/SnackShack.js')

describe('SnackShack', function() {
  let snackshack

  beforeEach(function() {
    snackshack = new SnackShack()
  })

  it('has an array for sandwich orders', function() {
    expect(snackshack.orders).toBeDefined()
  })

  it('responds to buy command', function() {
    expect(snackshack.buy).toBeDefined()
  })

  it('assumes an order of 1 unless specified', function() {
    expect(snackshack.buy()).toEqual(1)
  })
})