SnackShack = function() {
  this.orders = []
}

SnackShack.prototype.buy = function(quantity=1) {
  return this.checkOrder(quantity) ? 
  this.schedule(quantity) : 
  "Ey kid, I'm tryin' ta run a business!"
}

SnackShack.prototype.checkOrder = function(quantity) {
  return (Number.isInteger(quantity) && quantity > 0)
}

SnackShack.prototype.schedule = function(quantity) {
  let schedule = `0:00 ${quantity} sandwich order` + (quantity>1 ? 's' : '') + ` placed, start making sandwich 1\n1:00 serve sandwich 1`
  // for(i=2;i<=quantity;i++) {
  //   quantity += `\n${i-1}:30 start making sandwich ${i}\n${i}:00 serve sandwich ${i}`
  // }
  return schedule
}

SnackShack.prototype.formatTime = function(time) {
  time.includes('.5') ?
  time = time.replace('.5', ':30') :
  time = time + ':00'
  return time
}

module.exports = SnackShack