class Person {
    constructor(name) {
        this.name = name;
    }

    hello() {
        if (typeof this.name === 'string') {
              return  this.name
        } else {
            return 'Hello!';
        }
    }
}
var person = new Person('jon');

//var name = ' jenx';


var greethtml = templates['greeting']({
  message:person.hello()
});
document.write(greethtml);
