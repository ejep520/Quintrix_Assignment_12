'use strict';
let arrayedPersons = ["Alice", "Bob", "Cathy", "Dave"];
console.log("Start:");
console.log(arrayedPersons);
console.log("Shift:");
console.log(arrayedPersons.shift());
console.log("Post-shift:")
console.log(arrayedPersons);
console.log("Unshift:");
console.log(arrayedPersons.unshift("Alisha"));
console.log("Post-unshift:");
console.log(arrayedPersons);
console.log("Pop:");
console.log(arrayedPersons.pop());
console.log("Post-pop:");
console.log(arrayedPersons);
console.log("Push:");
console.log(arrayedPersons.push("Dallas"));
console.log("Post-push:");
console.log(arrayedPersons);
console.log("Slice(1):");
console.log(arrayedPersons.slice(1));
console.log("Post-slice:");
console.log(arrayedPersons);
console.log("Slice(0, 2):");
console.log(arrayedPersons.slice(0, 2));
console.log("Post-slice:");
console.log(arrayedPersons);
console.log("Splice(1, 2, \"Billy\", \"Carol\")");
console.log(arrayedPersons.splice(1, 2, "Billy", "Carol"));
console.log("Post-splice:");
console.log(arrayedPersons);
console.log("Easy stuff's done. Something more fun next!");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
arrayedPersons = [new Person("Alisha", 17), new Person("Billy", 19), new Person("Carol", 23), new Person("Dallas", 21)];
function clubBouncer(entrant) {
    if (entrant instanceof Person) {
        if (entrant.age > 17) console.log("The bouncer is letting " + entrant.name + " in.");
        else console.log("The bouncer is bouncing " + entrant.name + " because it's a school night and past curfew.");
    } else "The bouncer only deals with people. Whatever this was, it's not getting in.";
}
console.log("The kids try to get into a club...");
arrayedPersons.forEach(youth => clubBouncer(youth));