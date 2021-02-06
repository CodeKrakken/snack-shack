'use strict';
const SnackShack = require('../lib/SnackShack.js')

describe('SnackShack', function() {
  let snackshack

  beforeEach(function() {
    snackshack = new SnackShack()
  })

  it('responds to buy command', function() {
    expect(snackshack.buy).toBeDefined()
  })

  it('responds to getSchedule command', function() {
    expect(snackshack.getSchedule).toBeDefined()
  })

  it('returns a schedule after order', function() {
    snackshack.buy(4)
    expect(snackshack.getSchedule()).toEqual("0:00 4 sandwich orders placed, start making sandwich 1\n"
                                    + "1:00 serve sandwich 1\n"
                                    + "1:30 start making sandwich 2\n"
                                    + "2:30 serve sandwich 2\n"
                                    + "3:00 start making sandwich 3\n"
                                    + "4:00 serve sandwich 3\n"
                                    + "4:30 start making sandwich 4\n"
                                    + "5:30 serve sandwich 4\n"
                                    + "6:00 take a well earned break!")
  })

  it('returns preparation time', function() {
    expect(snackshack.buy(1)).toEqual("1:30 til sandwichtime.")
    snackshack.backlog = 0
    expect(snackshack.buy(2)).toEqual("3:00 til sandwichtime.")
    snackshack.backlog = 0
    expect(snackshack.buy(3)).toEqual("4:30 til sandwichtime.")
    snackshack.backlog = 0
    expect(snackshack.buy(4)).toEqual("6:00 til sandwichtime.")
  })

  it('assumes an order of 1 unless specified', function() {
    expect(snackshack.buy()).toEqual("1:30 til sandwichtime.")
  })

  it('will only accept a positive integer order', function() {
    expect(snackshack.buy(0)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(-1)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy('bumwag')).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(1.6)).toEqual("Ey kid, I'm tryin' ta run a business!")
    expect(snackshack.buy(true)).toEqual("Ey kid, I'm tryin' ta run a business!")
  })

  it('returns a correct estimate for an order when there is already a backlog', function() {
    snackshack.backlog = 4
    expect(snackshack.buy(4)).toEqual("12:00 til sandwichtime.")
  })
})