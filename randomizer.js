var nameSpace = document.getElementById('nameSpace');
var button = document.getElementById('randomize');
button.addEventListener('click', function() {
	nameSpace.innerHTML = "";
	randomizer(namesArray, 2);
})

function randomizer(namesArray, number) {
	sortedArray = namesArray.sort(function() { return 0.5 - Math.random() });
	var counter = 0;
	for (var i = 0; i < sortedArray.length; i++) {
		nameSpace.innerHTML += sortedArray[i];
		if (counter === number - 1) {
			nameSpace.innerHTML +="<br>";
			counter = 0;
		}
		else {
			nameSpace.innerHTML += ", ";
			counter += 1;
		}
	}
}

var namesArray = ["devin j", "ryan", "devin f", "eric", "paul", "colin", "margaret", "mia", "john", "brynne", "mike", "sophia"];




