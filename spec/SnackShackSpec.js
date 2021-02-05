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

  it('returns preparation time', function() {
    expect(snackshack.buy(1)).toEqual("0:00 1 sandwich order placed, start making sandwich 1\n1:00 serve sandwich 1")
    expect(snackshack.buy(2)).toEqual("0:00 2 sandwich orders placed, start making sandwich 1\n1:00 serve sandwich 1\n1:30 start making sandwich 2\n2:00 serve sandwich 2")
    // expect(snackshack.buy(6000)).toEqual('9000:00')
  })

  it('assumes an order of 1 unless specified', function() {
    expect(snackshack.buy()).toEqual("0:00 1 sandwich order placed, start making sandwich 1\n1:00 serve sandwich 1")
  })

  it('will only accept a positive integer order', function() {
    expect(snackshack.buy(0)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(-1)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy('bumwag')).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(1.6)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(true)).toEqual("Ey kid, I'm tryin' ta run a business!")
  })

})