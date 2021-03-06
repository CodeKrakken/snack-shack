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

  it('returns a correct estimate for an order when there is a backlog', function() {
    snackshack.backlog = 2
    expect(snackshack.buy(2)).toEqual("6:00 til sandwichtime.")
  })

  it('refuses orders that will take more than 10 minutes to serve', function() {
    expect(snackshack.buy(7)).toEqual("Sorry, the wait will be too long.")
  })

  it('takes backlog into account when deciding if wait will be too long', function() {
    snackshack.backlog = 6
    expect(snackshack.buy(1)).toEqual("Sorry, the wait will be too long.")
  })

  it('has a limited inventory', function() {
    expect(snackshack.inventory).toBeDefined()
  })

  it('has an inventory of 45', function() {
    expect(snackshack.inventory).toEqual(45)
  })

  it('reduces its inventory when a sandwich is purchased', function() {
    snackshack.buy(5)
    expect(snackshack.inventory).toEqual(40)
  })

  it('rejects orders when inventory cannot handle them', function() {
    for(let i=0;i<7;i++) {
      snackshack.buy(6)
      snackshack.backlog = 0
    }
    expect(snackshack.buy(6)).toEqual('Sorry, not enough sandwiches!')
  })
})