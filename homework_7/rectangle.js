/*1.Create a Rectangle class. Rectangle should have: length and width. It should have getters and setters for all fields.
It should have getArea() method. It should have getPerimeter() method.It should have toString() method.*/

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  get getLength() {
    return this.length;
  }
  get getWidth() {
    return this.width;
  }
  set setLength(newLength) {
    this.length = newLength;
  }
  set setWidth(newWidth) {
    this.width = newWidth;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  toString() {
    return "length - " + this.length + "\n" + "width - " + this.width;
  }
}

const rect = new Rectangle(10,20);
rect.setLength = 40;
console.log(rect.getWidth);
console.log(rect.toString())