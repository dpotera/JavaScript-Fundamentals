'use strict';

// Creating Objects

/*
* Object Properties & default values:
*   WRITABLE        true
*   ENUMERABLE      true
*   CONFIGURABLE    true
* */

function person1(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age
    this.say = function () {
        display("I'm "+this.name)
    }
}

var insP1 = new person1("Dominik","P",21);
display(insP1);
insP1.say();

function person2(name, surname, age){
    return {name: name, surname: surname, age: age, say: function(){display("I'm "+this.name)}}
}

var insP2 = person2("Dominik","P",21);
display(insP2);
insP2.say();

// Not supported by current JavaScript Version!
class Person3{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age
    }
    say(){
        display("I'm "+this.name)
    }
}

var insP3 = new Person3("Dominik","X",22);
display(insP3);
insP3.say();

display(Object.getOwnPropertyDescriptor(insP2,"surname"));
Object.defineProperty(insP2,"surname",{writable: false});
display(Object.getOwnPropertyDescriptor(insP2,"surname"));

// IF enumerable = false then in forEach property will be Ignored
// Also JSON.stringify() will ignore those properties
for(var propertyName in insP2){
    display(propertyName+" = "+insP2[propertyName])
}

// Returns Object properties in Array
display(Object.keys(insP1));

// DELETING Object property
delete insP1.surname;
display(insP1);

// DEFINING new Object
Object.defineProperty(insP3, 'fullName',{
    get: function () {
        return this.name+" "+this.surname
    },
    set: function(newName){
        var nameParts = newName.split(" ");
        this.name = nameParts[0];
        this.surname = nameParts[1];
    }
});

display(insP3.fullName);
insP3.fullName = "Dom Pot";
display(insP3);