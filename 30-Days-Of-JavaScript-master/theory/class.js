class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width

  }

}
Rectangle.prototype.area = function () {
  return this.height * this.width
}
let rec = new Rectangle(5, 10)
console.log(rec.area())
class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  }

}
let square = new Square(6)
console.log(square.area())
