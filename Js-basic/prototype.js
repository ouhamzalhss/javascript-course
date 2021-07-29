function Person() {
    this.name = 'Med';
    this.gender = 'M';
}

Person.prototype.age = 30;

var pers1 = new Person();
alert(pers1.age); // 30

var pers2 = new Person();
alert(pers2.age); // 30