
function Human(voice){
    this.voice = voice || "defaultVoice"
}
Human.prototype.speak = function(){
    display(this.voice)
};

function Person(name, age){
    Human.call(this,"personVoice")
    this.name = name
    this.age =age
}

Person.prototype = Object.create(Human.prototype)
Person.prototype.constructor = Person;

var person = new Person("Dominik",22);

display(person);
display(Person.prototype);

// Instantly changing Person prototype property
Person.prototype.surname = "sName";

// Changes prototype, but only for new Person instances from now.
Person.prototype = {surname: "newSName"};

display(Person.prototype);
display(person.__proto__);

display(person);
display(person.hasOwnProperty("surname"));
display(person.hasOwnProperty("name"));

display(person.speak());

display(person.__proto__);
display(person.__proto__.__proto__);
display(person.__proto__.__proto__.__proto__);