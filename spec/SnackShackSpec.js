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
    expect(snackshack.buy(1)).toEqual("0:00 1 sandwich order placed, start making sandwich 1\n"
                                    + "1:00 serve sandwich 1\n"
                                    + "1:30 take a well earned break!")
    expect(snackshack.buy(2)).toEqual("0:00 2 sandwich orders placed, start making sandwich 1\n"
                                    + "1:00 serve sandwich 1\n"
                                    + "1:30 start making sandwich 2\n"
                                    + "2:30 serve sandwich 2\n"
                                    + "3:00 take a well earned break!")
    expect(snackshack.buy(3)).toEqual("0:00 3 sandwich orders placed, start making sandwich 1\n"
                                    + "1:00 serve sandwich 1\n"
                                    + "1:30 start making sandwich 2\n"
                                    + "2:30 serve sandwich 2\n"
                                    + "3:00 start making sandwich 3\n"
                                    + "4:00 serve sandwich 3\n"
                                    + "4:30 take a well earned break!")
  })

  it('assumes an order of 1 unless specified', function() {
    expect(snackshack.buy()).toEqual("0:00 1 sandwich order placed, start making sandwich 1\n"
                                   + "1:00 serve sandwich 1\n"
                                   + "1:30 take a well earned break!")
  })

  it('will only accept a positive integer order', function() {
    expect(snackshack.buy(0)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(-1)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy('bumwag')).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(1.6)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(true)).toEqual("Ey kid, I'm tryin' ta run a business!")
  })

})