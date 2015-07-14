#!usr/bin/env node

var print_prime_number = function(number_of_prime_numbers) {

	var arr = [];
	var number = 3;
	var is_prime = true;

	if(number_of_prime_numbers >= 1) {arr.push(2)}

	for(counter = 2; counter <=  number_of_prime_numbers;) {

		for(i = 2; i <= Math.sqrt(number); i++) {

			if(number%i == 0) {
				is_prime = false;
				break;
			}
		}
		
		if(is_prime == true) {
			arr.push(number);
			counter++;
		}

		is_prime = true;
		number++;				
	}

	console.log(arr.join(","));
};

print_prime_number(100);
