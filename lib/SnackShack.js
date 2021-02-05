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
  for(i=2;i<=quantity;i++) {
    schedule += `\n${i-1}:30 start making sandwich ${i}\n${i}:00 serve sandwich ${i}`
  }
  schedule += `\n${this.formatTime(quantity*1.5)} take a well earned break!`
  return schedule
}

SnackShack.prototype.formatTime = function(time) {
  timeString = time.toString()
  timeString.includes('.5') ?
  timeString = timeString.replace('.5', ':30') :
  timeString = timeString + ':00'
  return timeString
}

module.exports = SnackShack