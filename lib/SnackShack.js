SnackShack = function() {
  this.backlog = 0
}

SnackShack.prototype.buy = function(quantity=1) {
  return this.checkOrder(quantity) ? 
  this.completeOrder(quantity) : 
  "Ey kid, I'm tryin' ta run a business!"
}

SnackShack.prototype.completeOrder = function(quantity) {
  this.schedule = this.createSchedule(quantity)
  return this.estimatedWait(quantity)
}

SnackShack.prototype.estimatedWait = function(quantity) {
  this.backlog += quantity
  return `${this.formatTime(this.backlog*1.5)} til sandwichtime.`
}

SnackShack.prototype.checkOrder = function(quantity) {
  return (Number.isInteger(quantity) && quantity > 0)
}

SnackShack.prototype.createSchedule = function(quantity) {
  let schedule = `0:00 ${quantity} sandwich order` + (quantity>1 ? 's' : '') + ` placed, start making sandwich 1\n1:00 serve sandwich 1`
  for(i=2;i<=quantity;i++) {
    makeTime = (i-1)*1.5
    serveTime = makeTime + 1
    schedule += `\n${this.formatTime(makeTime)} start making sandwich ${i}\n${this.formatTime(serveTime)} serve sandwich ${i}`
  }
  breakTime = quantity*1.5
  schedule += `\n${this.formatTime(breakTime)} take a well earned break!`
  return schedule
}

SnackShack.prototype.getSchedule = function() {
  return this.schedule
}

SnackShack.prototype.formatTime = function(time) {
  timeString = time.toString()
  timeString.includes('.5') ?
  timeString = timeString.replace('.5', ':30') :
  timeString = timeString + ':00'
  return timeString
}

module.exports = SnackShack