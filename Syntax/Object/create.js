// Create object

// type 1
const person1 = {}; // or const person1 = new Object();
person1.name = 'Louis';
person1.age = 34;
person1.city = 'taipei';

console.log(person1);
// eslint-disable-next-line dot-notation
console.log(person1['name']); // [] 裡面要放string

// Object.create
const personPortal = {
	calculateAge() {
		return 2016 - this.yearOfBirth;
	}
};

const John = Object.create(personPortal);
John.name = 'John';
John.yearOfBirth = 1990;
John.job = 'teacher';

console.log(John);
console.log(John.yearOfBirth);
console.log(John.calculateAge());
