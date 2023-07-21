const myList = document.getElementById("my-list");

for (let i = 1; i <= 100; i++) {
	myList.innerHTML += `<li>Item ${i}</li>`;

	if (i % 3 == 0) {
		myList.innerHTML += `<li>Item ${i}</li>`;
	}
}
