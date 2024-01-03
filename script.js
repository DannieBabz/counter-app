const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counter = document.getElementById("counter");

let count = 0;
counter.innerHTML = count;

function increment() {
	counter.innerHTML = count++;
    counter.classList.toggle("next")
}
function decrement() {
	if (count == 0) {
		counter.innerHTML = count;
	} else {
		counter.innerHTML = count--;
	}
}
