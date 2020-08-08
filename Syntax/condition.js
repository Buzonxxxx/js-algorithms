// switch
const job = 'teacher';

switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else');
}

// while
let num = -3;
while (num <= 3) {
	console.log(num);
	num += 1;
}

// do while
let x = -3;
do {
	console.log(x);
	x += 1;
} while (x <= 3);
