SnackShack = function() {
  this.orders = []
}

SnackShack.prototype.buy = function(quantity=1) {
  if(!Number.isInteger(quantity) || quantity < 1) {
    return "Ey kid, I'm tryin' ta run a business!"
  } else {
    return this.waitingTime(quantity)
  }
}

SnackShack.prototype.waitingTime = function(quantity) {
  const minutes = quantity*1.5
  let time = minutes.toString()
  return time.replace('.5', ':30')
}

module.exports = SnackShack