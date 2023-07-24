const myList = document.getElementById("my-list");

for (let i = 0; i <= 100; i++) {
	// `
	const listItem = document.createElement("li");
	listItem.innerHTML = i;
	if (i % 15 == 0) {
		listItem.innerHTML = "fizz";
	} else if (i % 3 == 0) {
		listItem.innerHTML = "buzz";
	} else if (i % 5 == 0) {
		listItem.innerHTML = "fizzbuzz";
	}

	myList.appendChild(listItem);
}
