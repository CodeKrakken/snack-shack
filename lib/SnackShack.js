SnackShack = function() {
  this.orders = []
}

SnackShack.prototype.buy = function(quantity=1) {
  if(!Number.isInteger(quantity) || quantity < 1) {
    return "Ey kid, I'm tryin' ta run a business!"
  } else {
    return quantity
  }
}

module.exports = SnackShack