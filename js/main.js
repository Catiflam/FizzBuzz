const myList = document.getElementById("my-list");

for (let i = 1; i <= 100; i++) {
	// `
	const listItem = document.createElement("li");
	listItem.innerHTML = i;
	if (i % 15 == 0) {
		listItem.innerHTML = "fizzbuzz";
	} else if (i % 3 == 0) {
		listItem.innerHTML = "fizz";
	} else if (i % 5 == 0) {
		listItem.innerHTML = "buzz";
	}

	myList.appendChild(listItem);
}
