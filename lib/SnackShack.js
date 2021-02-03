SnackShack = function() {
  this.orders = []
}

SnackShack.prototype.buy = function(quantity=1) {
  return this.checkOrder(quantity) ? this.waitingTime(quantity) : "Ey kid, I'm tryin' ta run a business!"
}

SnackShack.prototype.checkOrder = function(quantity) {
  return (Number.isInteger(quantity) && quantity < 1)
}

SnackShack.prototype.waitingTime = function(quantity) {
  const minutes = quantity*1.5
  let time = minutes.toString()
  return time.replace('.5', ':30')
}

module.exports = SnackShack