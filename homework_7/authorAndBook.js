/*3.Create an Author class and a Book class.
Author should have: name, email, gender. 
It should have appropriate getters accnd setters.
It should have a toString method.*/
class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }
  set email(newEmail) {
    this._email = newEmail;
  }

  toString() {
    return (
      "Name: " +
      this._name + ",  " +
      "Email: " +
      this._email + ",  " +
      "Gender: " +
      this._gender
    );
  }
}

const instanceOfAuthor = new Author("Lilit", "Nahapetyan", "female");
console.log(instanceOfAuthor.toString());

class Book {
  constructor(title, instanceOfA, price, quantity) {
    this._title = title;
    this._author = instanceOfA;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  set quantity(newQuantity) {
    this._quantity = newQuantity;
  }

  getProfit() {
    return this._price * this._quantity;
  }
  toString() {
    return (
      "Title:" + 
      this._title + "\n" +
      "Author: " + 
      this._author.toString() +"\n" +
      "Price: " +
      this._price + "\n" +
      "Quantity: " +
      this._quantity
    );
  }
}
 const instanceOfBook = new Book("Introduction to Python",instanceOfAuthor,200,50);
 console.log(instanceOfBook.toString());