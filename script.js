var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var list = document.getElementById("list");
var listItems = list.getElementsByClassName("item");

// var popup = document.getElementsByClassName("popup")[0];
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");



function addItem() {
	var li = document.createElement("li");
	li.innerHTML = "Новая задача!";
	li.className = "item";

	list.appendChild(li);

	popup.style.display = "none";
}

function delItem() {
	list.removeChild(listItems[0]);

	if (listItems.length == 0) {
		popup.style.display = "block";
	}
}

function closePopup() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);